import type { ItineraryDay } from '../db/schema';

export async function extractPDFText(buf: Buffer): Promise<string> {
  // unpdf bundles pdfjs with all serverless shims — no worker config needed
  const { extractText } = await import('unpdf');
  // mergePages: false preserves newlines per page; true collapses them to spaces
  const { text: pages } = await extractText(new Uint8Array(buf));
  return (pages as string[]).join('\n');
}

export function parseItineraryFromText(text: string, arrivalDate: string): ItineraryDay[] {
  const arrival = new Date(arrivalDate + 'T00:00:00Z');

  // Slice to the itinerary section
  const sectionIdx = text.search(/ITINERARY SUMMARY|DAILY ITINERARY|DAY[ -]BY[ -]DAY/i);
  const sectionText = sectionIdx >= 0 ? text.slice(sectionIdx) : text;
  const endIdx = sectionText.search(/IMPORTANT|CANCELLATION|NOT INCLUDED|CONFIRMED BY/i);
  const cleanText = endIdx > 0 ? sectionText.slice(0, endIdx) : sectionText;

  const results: ItineraryDay[] = [];

  for (const line of cleanText.split('\n')) {
    const trimmed = line.trim();
    // Each itinerary row starts with a 1-2 digit day number followed by a space
    const m = trimmed.match(/^(\d{1,2})\s+(.+)$/);
    if (!m) continue;
    const dayNum = parseInt(m[1], 10);
    if (dayNum < 1 || dayNum > 99) continue;
    const rest = m[2].trim();
    // Skip the "Activity  Overnight" header row
    if (/^activity\b/i.test(rest)) continue;

    // PDF tables produce 2+ spaces between columns; use that gap to split
    // activity (description) from accommodation (overnight).
    // Greedy (.*) finds the LAST such gap, so multi-word activities are kept intact.
    const colSplit = rest.match(/^(.*)\s{2,}(\S.+)$/);
    let description: string;
    let overnight: string | undefined;

    if (colSplit) {
      description = colSplit[1].replace(/\s+[–\-]\s*$/, '').trim();
      const rawOvernight = colSplit[2]
        .replace(/\s+[–\-]\s*$/, '')   // trailing dash = last-day marker
        .replace(/\s+[\d,]+\s*m\s*$/i, '') // strip altitude e.g. "2,600 m"
        .trim();
      overnight = /^[–\-]+$/.test(rawOvernight) ? undefined : rawOvernight || undefined;
    } else {
      // Single-spaced line — no column gap found; store whole line as description
      description = rest.replace(/\s+[–\-]\s*$/, '').trim();
    }

    if (!description) continue;

    const dt = new Date(arrival);
    dt.setUTCDate(dt.getUTCDate() + dayNum - 1);
    const entry: ItineraryDay = { day: dayNum, date: dt.toISOString().split('T')[0], description };
    if (overnight) entry.overnight = overnight;
    results.push(entry);
  }

  return results;
}
