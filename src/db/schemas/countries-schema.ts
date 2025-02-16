import { integer, pgTable, serial, text } from "drizzle-orm/pg-core";

// Updated Countries Table with new columns
export const countriesTable = pgTable("countries", {
	id: serial("id").primaryKey(),
	name: text("name").notNull(),
	alpha_2: text("alpha_2").unique().notNull(),
	alpha_3: text("alpha_3").unique().notNull(),
	country_code: integer("country_code").unique().notNull(),
	region: text("region"),
	sub_region: text("sub_region"),
	intermediate_region: text("intermediate_region"),
	region_code: integer("region_code"),
	sub_region_code: integer("sub_region_code"),
	intermediate_region_code: integer("intermediate_region_code")
});
