import { integer, numeric, pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";
import { visaProgramsTable } from "./visa_programs_schema";

export const financialRequirementsTable = pgTable("financial_requirements", {
	id: serial("id").primaryKey(),
	created_at: timestamp("created_at").notNull().defaultNow(),
	visa_program_id: integer("visa_program_id").references(() => visaProgramsTable.id, {
		onDelete: "cascade"
	}),
	requirement_type: text("requirement_type", { enum: ["monthly", "yearly", "savings"] }).notNull(),
	amount: numeric("amount").notNull(),
	currency: text("currency").notNull(),
	time_requirement: integer("time_requirement") // Only applies for savings type
});
