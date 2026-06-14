export const prerender = false;

import { getDb } from '../../../db/index';
import { bookings } from '../../../db/schema';
import { eq } from 'drizzle-orm';
import { extractPDFText, parseItineraryFromText } from '../../../lib/pdf-parser';

export async function DELETE({ params }: { params: { id: string } }) {
  const db = getDb();
  await db.delete(bookings).where(eq(bookings.id, params.id));
  return new Response(null, { status: 204 });
}

export async function PATCH({ params, request }: { params: { id: string }; request: Request }) {
  const db = getDb();
  const { id } = params;
  const data = await request.formData();

  const str = (key: string) => (data.get(key) as string | null)?.trim() || null;

  const updateData: Record<string, unknown> = {};
  if (data.has('name'))               updateData.name               = str('name');
  if (data.has('whatsappCountryCode')) updateData.whatsappCountryCode = str('whatsappCountryCode');
  if (data.has('whatsappNumber'))      updateData.whatsappNumber      = str('whatsappNumber');
  if (data.has('arrivalDate'))         updateData.arrivalDate         = str('arrivalDate');
  if (data.has('arrivalTime'))         updateData.arrivalTime         = str('arrivalTime');
  if (data.has('departureDate'))       updateData.departureDate       = str('departureDate');
  if (data.has('departureTime'))       updateData.departureTime       = str('departureTime');
  if (data.has('status'))              updateData.status              = str('status') ?? 'unpaid';
  if (data.has('amount'))              updateData.amount              = str('amount');
  if (data.has('note'))                updateData.note                = str('note');

  const pdfFile = data.get('pdf') as File | null;
  if (pdfFile && pdfFile.size > 0) {
    try {
      const arrivalDate = (updateData.arrivalDate as string) || '';
      const buf = Buffer.from(await pdfFile.arrayBuffer());
      const text = await extractPDFText(buf);
      updateData.itineraryDays = parseItineraryFromText(text, arrivalDate);
      updateData.itineraryFilename = pdfFile.name;
    } catch (err) {
      console.error('[pdf patch] failed:', err);
    }
  }

  const [updated] = await db.update(bookings).set(updateData).where(eq(bookings.id, id)).returning();
  return new Response(JSON.stringify(updated), {
    headers: { 'Content-Type': 'application/json' },
  });
}
