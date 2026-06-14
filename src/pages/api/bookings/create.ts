export const prerender = false;

import { getDb } from '../../../db/index';
import { bookings, type ItineraryDay } from '../../../db/schema';
import { extractPDFText, parseItineraryFromText } from '../../../lib/pdf-parser';

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
  const amount = (data.get('amount') as string)?.trim() || null;
  const note = (data.get('note') as string) || null;
  const pdfFile = data.get('pdf') as File | null;

  if (!name || !whatsappCountryCode || !whatsappNumber || !arrivalDate || !departureDate) {
    return new Response(JSON.stringify({ error: 'Missing required fields' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  let itineraryDays: ItineraryDay[] = [];
  let itineraryFilename: string | null = null;

  if (pdfFile && pdfFile.size > 0) {
    itineraryFilename = pdfFile.name;
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
    amount,
    note,
    itineraryDays,
    itineraryFilename,
  }).returning();

  return new Response(JSON.stringify(created), {
    status: 201,
    headers: { 'Content-Type': 'application/json' },
  });
}
