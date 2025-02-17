import { db } from "$db";
import {
	countriesTable,
	dependentRequirementsTable,
	financialRequirementsTable,
	visaProgramsTable
} from "$db/schema-index";

import type { PageServerLoad } from "./$types";

export async function load(): Promise<ReturnType<PageServerLoad>> {
	const countries = await db.select().from(countriesTable);
	const visaPrograms = await db.select().from(visaProgramsTable);
	const financialRequirements = await db.select().from(financialRequirementsTable);
	const dependentRequirements = await db.select().from(dependentRequirementsTable);

	return {
		countries: countries,
		visaPrograms: visaPrograms,
		financialRequirements: financialRequirements,
		dependentRequirements: dependentRequirements
	};
}
