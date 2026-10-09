import {
  pgTable,
  text,
  timestamp,
  pgEnum,
  serial,
  varchar
} from 'drizzle-orm/pg-core';

// ---------------------------------------------------------------------------
// Auth
// ---------------------------------------------------------------------------

export const roleEnum = pgEnum('role', ['user', 'admin']);

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 100 }),
  email: varchar('email', { length: 255 }).notNull().unique(),
  passwordHash: text('password_hash').notNull(),
  role: roleEnum('role').default('user').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull()
});

export type SelectUser = typeof users.$inferSelect;
