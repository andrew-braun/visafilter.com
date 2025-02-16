import { db } from "$db";
import { countriesTable } from "$db/schemas/countries-schema";
import type { PageServerLoad } from "./$types";

export async function load(): Promise<ReturnType<PageServerLoad>> {
	const countries = await db.select().from(countriesTable);

	return {
		countries: countries
	};
}
