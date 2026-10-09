import { sql } from 'drizzle-orm';
import { db } from '@/lib/db';

export const dynamic = 'force-dynamic';

async function databaseReady() {
  try {
    await db.execute(sql`select 1`);
    return true;
  } catch {
    return false;
  }
}

export default async function HomePage() {
  const dbReady = await databaseReady();

  return (
    <div className="flex min-h-[70vh] items-center justify-center">
      <div className="max-w-md text-center">
        <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border-2 border-dashed border-slate-300 text-2xl text-slate-400">
          +
        </div>
        <h1 className="text-2xl font-semibold tracking-tight text-slate-900">
          A blank page, ready for your idea
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-slate-600">
          Sign-in and a Postgres database are already wired up. Describe your
          first feature and it will start taking shape here.
        </p>
        <div className="mt-6 inline-flex items-center gap-2 rounded-full border bg-white px-3 py-1 text-xs text-slate-600">
          <span className={`h-2 w-2 rounded-full ${dbReady ? 'bg-emerald-500' : 'bg-amber-500'}`} />
          {dbReady ? 'Database connected' : 'Database not connected — run bun run db:setup'}
        </div>
      </div>
    </div>
  );
}
