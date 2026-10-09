# Project conventions

This is the **A blank screen** starter. Edit anything freely as the user requests.

Start from an empty page and build whatever you like. An empty Next.js + Postgres app: app shell, sign-in and a database, with a single friendly empty page.

## Package manager

Use **bun**, not npm.

```bash
bun install          # install deps
bun run dev          # start dev server (port 3000)
bun run typecheck    # type-check (tsc --noEmit) — use this to validate changes
# bun run build      # DISABLED in this template — breaks the live preview, see below
bun run db:setup     # migrate + seed
bun run db:migrate   # apply migrations
bun run db:seed      # seed data (idempotent)
bun run db:generate  # generate migration after schema change
```

## Validating changes

Run `bun run typecheck` to check your work. There is no lint or test suite —
`typecheck` is the check. `./scripts/route-check` requests the main routes on
the running dev server and fails on any non-2xx; add new routes to
`scripts/routes.txt`.

**Do NOT run `bun run build` (`next build`) in the workspace.** The dev server
(`bun run dev`) is already running and serving the live preview from `.next/`.
A production build overwrites `.next/`, which corrupts the running dev server
and takes the preview down until it is restarted.

## Database

- Schema: `lib/schema.ts` (Drizzle). Migrations: `drizzle/`.
- Tables: `users` only. Add your tables to `lib/schema.ts`..
- After changing the schema: `bun run db:generate` then `bun run db:migrate`.
  Never edit an already-applied migration; add a new one.
- `db/seed.ts` runs every time the preview starts. Keep it idempotent (it skips
  when data already exists) and never let it overwrite user data.

## Code layout

- Pages live under `app/(app)/`; the sidebar links are in `app/(app)/layout.tsx`.
- Add pages under `app/(app)/` and link them in `app/(app)/layout.tsx`. Put Server Actions next to the pages that use them.
- Shared UI: `components/app-shell.tsx`, `components/page-header.tsx`, `components/ui/*` (shadcn/ui).
- Dates are stored as calendar days (`YYYY-MM-DD` strings); format with `lib/format.ts`.

## Auth

- Auth.js (next-auth v5) with email/password credentials, `lib/auth.ts`.
- Seeded account: `admin@admin.com` / `password` (role `admin`).
- Pages and Server Actions are open so the preview works without signing in.
  To require sign-in, check `await auth()` at the top of the Server Actions (and
  redirect to `/login` in `app/(app)/layout.tsx`).

## Stack

- Next.js 15 (Turbopack), React 19, TypeScript, Tailwind CSS 3
- Drizzle ORM + postgres-js (`DATABASE_URL`)
- Shadcn UI components in `components/ui/`
