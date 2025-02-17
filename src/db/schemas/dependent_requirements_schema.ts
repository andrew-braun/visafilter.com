import { visaProgramsTable } from "$db/schemas/visa_programs_schema";
import {
	boolean,
	integer,
	numeric,
	pgEnum,
	pgTable,
	serial,
	text,
	timestamp
} from "drizzle-orm/pg-core";

const dependentTypeEnum = pgEnum("dependent_type_enum", ["spouse", "child"]);

export const dependentRequirementsTable = pgTable("dependent_requirements", {
	id: serial("id").primaryKey(),
	created_at: timestamp("created_at").notNull().defaultNow(),
	visa_program_id: integer("visa_program_id").references(() => visaProgramsTable.id, {
		onDelete: "cascade"
	}),
	amount_type: text("amount_type", { enum: ["percentage", "fixed"] }).notNull(),
	first_amount: numeric("first_amount").notNull(),
	subsequent_amount: numeric("subsequent_amount"), // Optional for sequential calculation
	currency: text("currency"), // Only for fixed amounts
	is_sequential: boolean("is_sequential").notNull().default(false),
	dependent_type: dependentTypeEnum("dependent_type").array().default([]).notNull()
});
