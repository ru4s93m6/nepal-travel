export const prerender = false;

import { getDb } from '../../../db/index';
import { bookings } from '../../../db/schema';
import { eq } from 'drizzle-orm';

export async function DELETE({ params }: { params: { id: string } }) {
  const db = getDb();
  const { id } = params;
  await db.delete(bookings).where(eq(bookings.id, id));
  return new Response(null, { status: 204 });
}

export async function PATCH({ params, request }: { params: { id: string }; request: Request }) {
  const db = getDb();
  const { id } = params;
  const body = await request.json();

  const updateData: Record<string, unknown> = {};
  if (body.status !== undefined) updateData.status = body.status;
  if (body.note !== undefined) updateData.note = body.note;
  if (body.name !== undefined) updateData.name = body.name;
  if (body.whatsappCountryCode !== undefined) updateData.whatsappCountryCode = body.whatsappCountryCode;
  if (body.whatsappNumber !== undefined) updateData.whatsappNumber = body.whatsappNumber;
  if (body.arrivalDate !== undefined) updateData.arrivalDate = body.arrivalDate;
  if (body.arrivalTime !== undefined) updateData.arrivalTime = body.arrivalTime;
  if (body.departureDate !== undefined) updateData.departureDate = body.departureDate;
  if (body.departureTime !== undefined) updateData.departureTime = body.departureTime;

  const [updated] = await db.update(bookings).set(updateData).where(eq(bookings.id, id)).returning();
  return new Response(JSON.stringify(updated), {
    headers: { 'Content-Type': 'application/json' },
  });
}
