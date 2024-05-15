import { sql } from "drizzle-orm";
import { int, real, text, sqliteTable } from "drizzle-orm/sqlite-core";

export const products = sqliteTable("products", {
  id: int("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  name: text("name", { length: 256 }).notNull(),
  description: text("description", { length: 1000 }).notNull(),
  ipa: real("ipa").notNull(),
  createdAt: text("timestamp")
    .notNull()
    .default(sql`(current_timestamp)`),
});

export const investments = sqliteTable("investments", {
  id: int("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  product_id: int("product_id")
    .notNull()
    .references(() => products.id),
  value: real("value").notNull(),
  currency: text("currency", { enum: ["USD", "GBP", "EUR"] })
    .notNull()
    .default("GBP"),
  status: text("status", { enum: ["Pending", "Completed"] })
    .notNull()
    .default("Pending"),
  createdAt: text("timestamp")
    .notNull()
    .default(sql`(current_timestamp)`),
});
