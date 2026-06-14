export const prerender = false;

import { getDb } from '../../../db/index';
import { bookings, type ItineraryDay } from '../../../db/schema';

async function extractPDFText(buf: Buffer): Promise<string> {
  // @ts-ignore — pdfjs-dist legacy build works in Node.js / Vercel SSR
  const { getDocument } = await import('pdfjs-dist/legacy/build/pdf.mjs');
  const pdf = await getDocument({ data: new Uint8Array(buf) }).promise;
  let text = '';
  for (let i = 1; i <= pdf.numPages; i++) {
    const page = await pdf.getPage(i);
    const content = await page.getTextContent();
    // Join items preserving multi-space gaps so column splitting works
    text += (content.items as Array<{ str: string }>).map(it => it.str).join(' ') + '\n';
  }
  return text;
}

function parseItineraryFromText(text: string, arrivalDate: string): ItineraryDay[] {
  const arrival = new Date(arrivalDate + 'T00:00:00Z');

  // ── Strategy 1: table format "N   Activity   Overnight" ──
  // Find the itinerary section
  const sectionIdx = text.search(/ITINERARY SUMMARY|DAILY ITINERARY|DAY[ -]BY[ -]DAY/i);
  const sectionText = sectionIdx >= 0 ? text.slice(sectionIdx) : text;
  // Trim at end-of-itinerary markers
  const endIdx = sectionText.search(/IMPORTANT|CANCELLATION|NOT INCLUDED|CONFIRMED BY/i);
  const cleanText = endIdx > 0 ? sectionText.slice(0, endIdx) : sectionText;

  // Split on 2+ spaces to separate table columns
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

  // ── Strategy 2: fallback "Day N: description" text format ──
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

export async function POST({ request }: { request: Request }) {
  const data = await request.formData();

  const name = (data.get('name') as string)?.trim();
  const whatsappCountryCode = (data.get('whatsappCountryCode') as string)?.trim();
  const whatsappNumber = (data.get('whatsappNumber') as string)?.trim();
  const arrivalDate = data.get('arrivalDate') as string;
  const arrivalTime = (data.get('arrivalTime') as string) || null;
  const departureDate = data.get('departureDate') as string;
  const departureTime = (data.get('departureTime') as string) || null;
  const status = (data.get('status') as string) || 'unpaid';
  const note = (data.get('note') as string) || null;
  const pdfFile = data.get('pdf') as File | null;

  if (!name || !whatsappCountryCode || !whatsappNumber || !arrivalDate || !departureDate) {
    return new Response(JSON.stringify({ error: 'Missing required fields' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  let itineraryDays: ItineraryDay[] = [];

  if (pdfFile && pdfFile.size > 0) {
    try {
      const buf = Buffer.from(await pdfFile.arrayBuffer());
      const text = await extractPDFText(buf);
      itineraryDays = parseItineraryFromText(text, arrivalDate);
    } catch (err) {
      console.error('[pdf] failed:', err);
    }
  }

  const db = getDb();
  const [created] = await db.insert(bookings).values({
    name,
    whatsappCountryCode,
    whatsappNumber,
    arrivalDate,
    arrivalTime,
    departureDate,
    departureTime,
    status,
    note,
    itineraryDays,
  }).returning();

  return new Response(JSON.stringify(created), {
    status: 201,
    headers: { 'Content-Type': 'application/json' },
  });
}
