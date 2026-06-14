import { pgTable, uuid, text, date, jsonb, timestamp } from 'drizzle-orm/pg-core';

export type ItineraryDay = {
  day: number;
  date: string;
  description: string;
  overnight?: string;
};

export const bookings = pgTable('bookings', {
  id: uuid('id').primaryKey().defaultRandom(),
  name: text('name').notNull(),
  whatsappCountryCode: text('whatsapp_country_code').notNull(),
  whatsappNumber: text('whatsapp_number').notNull(),
  arrivalDate: date('arrival_date').notNull(),
  arrivalTime: text('arrival_time'),
  departureDate: date('departure_date').notNull(),
  departureTime: text('departure_time'),
  status: text('status').notNull().default('unpaid'),
  note: text('note'),
  itineraryDays: jsonb('itinerary_days').$type<ItineraryDay[]>().default([]),
  createdAt: timestamp('created_at').defaultNow(),
});

export type Booking = typeof bookings.$inferSelect;
export type NewBooking = typeof bookings.$inferInsert;
