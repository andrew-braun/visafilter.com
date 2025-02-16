import type { VisaProgram } from "$db/visas";
import { getMonthlyIncomeReq } from "./find-data";

export function sortVisaProgramsByIncome({ visaPrograms }: { visaPrograms: VisaProgram[] }) {
	return visaPrograms?.toSorted((a, b) => {
		const aMonthlyReq = getMonthlyIncomeReq({ visa: a });
		const bMonthlyReq = getMonthlyIncomeReq({ visa: b });

		const aMonthlyRequirement = aMonthlyReq?.amount || 0;
		const bMonthlyRequirement = bMonthlyReq?.amount || 0;

		return bMonthlyRequirement - aMonthlyRequirement;
	});
}
