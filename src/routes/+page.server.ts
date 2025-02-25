import { getVisaData } from "$db/fetch/get-visa-data";

import type { PageServerLoad } from "./$types";

export async function load(): Promise<ReturnType<PageServerLoad>> {
	const visaData = await getVisaData();

	return {
		visaData
	};
}
