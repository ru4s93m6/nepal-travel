import type { ItineraryDay } from '../db/schema';

export async function extractPDFText(buf: Buffer): Promise<string> {
  // @ts-ignore — pdfjs-dist legacy build works in Node.js / Vercel SSR
  const { getDocument } = await import('pdfjs-dist/legacy/build/pdf.mjs');
  const pdf = await getDocument({ data: new Uint8Array(buf) }).promise;
  let text = '';
  for (let i = 1; i <= pdf.numPages; i++) {
    const page = await pdf.getPage(i);
    const content = await page.getTextContent();
    text += (content.items as Array<{ str: string }>).map(it => it.str).join(' ') + '\n';
  }
  return text;
}

export function parseItineraryFromText(text: string, arrivalDate: string): ItineraryDay[] {
  const arrival = new Date(arrivalDate + 'T00:00:00Z');

  const sectionIdx = text.search(/ITINERARY SUMMARY|DAILY ITINERARY|DAY[ -]BY[ -]DAY/i);
  const sectionText = sectionIdx >= 0 ? text.slice(sectionIdx) : text;
  const endIdx = sectionText.search(/IMPORTANT|CANCELLATION|NOT INCLUDED|CONFIRMED BY/i);
  const cleanText = endIdx > 0 ? sectionText.slice(0, endIdx) : sectionText;

  const tokens = cleanText.split(/\s{2,}/).map(t => t.trim()).filter(Boolean);
  const tableSkipWords = new Set(['Day', 'Activity', 'Overnight', 'Description', 'Night', 'Accommodation']);

  const tableResults: ItineraryDay[] = [];
  let i = 0;
  while (i < tokens.length) {
    const tok = tokens[i];
    if (/^\d+$/.test(tok)) {
      const dayNum = parseInt(tok, 10);
      if (dayNum >= 1 && dayNum <= 99) {
        const activity = tokens[i + 1]?.trim() ?? '';
        const overnight = tokens[i + 2]?.trim() ?? '';
        if (activity && !tableSkipWords.has(activity)) {
          const dt = new Date(arrival);
          dt.setUTCDate(dt.getUTCDate() + dayNum - 1);
          tableResults.push({
            day: dayNum,
            date: dt.toISOString().split('T')[0],
            description: activity,
            overnight: (overnight && overnight !== '–' && overnight !== '-') ? overnight : undefined,
          });
          i += 3;
          continue;
        }
      }
    }
    i++;
  }

  if (tableResults.length > 0) return tableResults;

  const linePattern = /Day\s+(\d+)[:\s\-\.]+([^\n]+(?:\n(?!Day\s+\d+)[^\n]+)*)/gi;
  const lineResults: ItineraryDay[] = [];
  let match: RegExpExecArray | null;
  while ((match = linePattern.exec(text)) !== null) {
    const dayNum = parseInt(match[1], 10);
    const dt = new Date(arrival);
    dt.setUTCDate(dt.getUTCDate() + dayNum - 1);
    lineResults.push({
      day: dayNum,
      date: dt.toISOString().split('T')[0],
      description: match[2].replace(/\s+/g, ' ').trim(),
    });
  }
  return lineResults;
}
