import { eq } from "drizzle-orm";
import { db } from "../index";
import { countriesTable } from "../schemas/countries_schema";
import { financialRequirementsTable } from "../schemas/financial_requirements_schema";
import { visaProgramsTable } from "../schemas/visa_programs_schema";

export async function getVisaData() {
	const response = await db
		.select({
			// Visa Program fields
			visaId: visaProgramsTable.id,
			programName: visaProgramsTable.program_name,
			// Country fields
			countryName: countriesTable.name,
			countryAlpha2: countriesTable.alpha_2,
			countryRegion: countriesTable.region,
			countrySubregion: countriesTable.sub_region,
			// Financial fields
			financialAmount: financialRequirementsTable.amount,
			financialCurrency: financialRequirementsTable.currency,
			requirementType: financialRequirementsTable.requirement_type
		})
		.from(visaProgramsTable)
		.leftJoin(countriesTable, eq(visaProgramsTable.country_id, countriesTable.id))
		.leftJoin(
			financialRequirementsTable,
			eq(financialRequirementsTable.visa_program_id, visaProgramsTable.id)
		);

	const formattedData = {
		visaData: response.map((item) => ({
			program: {
				id: item.visaId,
				name: item.programName
			},
			country: {
				name: item.countryName,
				alpha2: item.countryAlpha2,
				region: item.countryRegion,
				subregion: item.countrySubregion
			},
			financial: {
				amount: item.financialAmount,
				currency: item.financialCurrency,
				type: item.requirementType
			}
		}))
	};

	return formattedData;
}
