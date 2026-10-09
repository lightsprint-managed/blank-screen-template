# Blank app

An empty Next.js + Postgres app: app shell, sign-in and a database, with a single friendly empty page. Start building from here.

## Stack

Next.js 15 (App Router, Turbopack) · React 19 · TypeScript · Tailwind CSS · shadcn/ui · Auth.js (email/password) · Drizzle ORM · PostgreSQL

## Getting started

### Lightsprint-managed repos

`DATABASE_URL` and `AUTH_SECRET` are already set in the sandbox, and the preview runs migrations, the seed and the dev server for you.

### Local development

```bash
cp .env.example .env      # fill in DATABASE_URL and AUTH_SECRET
bun install
bun run db:setup          # migrations + sample data
bun run dev               # http://localhost:3000
```

Sign in with the seeded account `admin@admin.com` / `password`, or create one. Pages are readable and editable without signing in so the preview works out of the box; see `CLAUDE.md` to lock writes down.

## Pages

| Route | What it shows |
|-------|---------------|
| `/` | An empty page showing whether the database is connected |

## Data

Schema in `lib/schema.ts`, migrations in `drizzle/`. Tables: `users` only. Add your tables to `lib/schema.ts`..

Add pages under `app/(app)/` and link them in `app/(app)/layout.tsx`. Put Server Actions next to the pages that use them.

To change the schema: edit `lib/schema.ts`, run `bun run db:generate`, then `bun run db:migrate`.

## Scripts

| Script | Description |
|--------|-------------|
| `bun run dev` | Dev server on :3000 |
| `bun run typecheck` | Type-check (the validation step) |
| `bun run db:generate` | Generate a migration from schema changes |
| `bun run db:migrate` | Apply migrations |
| `bun run db:seed` | Seed sample data (idempotent: skips when data exists) |
| `bun run db:setup` | Migrate + seed |
| `./scripts/route-check` | Request every main route (`scripts/routes.txt`) and fail on non-2xx; `BASE_URL` defaults to http://localhost:3000 |

`build` and `start` are disabled on purpose (a production build overwrites the `.next/` the live preview serves). Re-enable them for deploys.

## Credits

- Starter (auth, Drizzle setup, shadcn/ui components) from [vercel/nextjs-postgres-nextauth-tailwindcss-template](https://github.com/vercel/nextjs-postgres-nextauth-tailwindcss-template) (MIT) via `lightsprint-managed/nextjs-postgres-template`.
- UI components in `components/ui/` from [shadcn/ui](https://ui.shadcn.com) (MIT).

Licensed MIT — see `LICENSE.md`.
