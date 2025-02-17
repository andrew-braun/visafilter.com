import { integer, pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";
import { countriesTable } from "./countries_schema";

// Visa Programs Table
export const visaProgramsTable = pgTable("visa_programs", {
	id: serial("id").primaryKey(),
	created_at: timestamp("created_at").notNull().defaultNow(),
	country_id: integer("country_id").references(() => countriesTable.id, { onDelete: "cascade" }),
	program_name: text("program_name").notNull()
});
