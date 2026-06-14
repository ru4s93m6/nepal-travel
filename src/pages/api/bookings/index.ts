export const prerender = false;

import { getDb } from '../../../db/index';
import { bookings } from '../../../db/schema';
import { lt } from 'drizzle-orm';

export async function GET() {
  const db = getDb();

  // Auto-purge bookings older than 6 months
  const sixMonthsAgo = new Date();
  sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);
  const cutoff = sixMonthsAgo.toISOString().split('T')[0];

  await db.delete(bookings).where(lt(bookings.arrivalDate, cutoff));

  const result = await db.select().from(bookings).orderBy(bookings.arrivalDate);

  // Drizzle returns camelCase keys; the admin UI expects snake_case
  const rows = result.map(b => ({
    id: b.id,
    name: b.name,
    whatsapp_country_code: b.whatsappCountryCode,
    whatsapp_number: b.whatsappNumber,
    arrival_date: b.arrivalDate,
    arrival_time: b.arrivalTime,
    departure_date: b.departureDate,
    departure_time: b.departureTime,
    status: b.status,
    note: b.note,
    itinerary_days: b.itineraryDays,
    created_at: b.createdAt,
  }));

  return new Response(JSON.stringify(rows), {
    headers: { 'Content-Type': 'application/json' },
  });
}
