import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from './schema';

type DrizzleDb = ReturnType<typeof drizzle<typeof schema>>;
let _db: DrizzleDb | null = null;

export function getDb(): DrizzleDb {
  if (!_db) {
    const url = import.meta.env.DATABASE_URL;
    if (!url) throw new Error('DATABASE_URL is not set. Add it to .env (see Neon dashboard).');
    _db = drizzle(neon(url), { schema });
  }
  return _db;
}
