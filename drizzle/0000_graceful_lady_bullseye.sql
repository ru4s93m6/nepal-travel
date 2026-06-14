CREATE TABLE "bookings" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" text NOT NULL,
	"whatsapp_country_code" text NOT NULL,
	"whatsapp_number" text NOT NULL,
	"arrival_date" date NOT NULL,
	"arrival_time" text,
	"departure_date" date NOT NULL,
	"departure_time" text,
	"status" text DEFAULT 'unpaid' NOT NULL,
	"note" text,
	"itinerary_days" jsonb DEFAULT '[]'::jsonb,
	"created_at" timestamp DEFAULT now()
);
