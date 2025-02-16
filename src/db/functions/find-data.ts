import type { VisaProgram } from "$db/visas";

export function getMonthlyIncomeReq({ visa }: { visa: VisaProgram }) {
	const monthlyIncomeReq = visa.financialRequirements.find((req) => req.type === "monthly");

	if (monthlyIncomeReq) {
		return monthlyIncomeReq;
	}

	const yearlyIncomeReq = visa.financialRequirements.find((req) => req.type === "yearly");

	if (yearlyIncomeReq) {
		return {
			type: "monthly",
			amount: yearlyIncomeReq.amount / 12,
			currency: yearlyIncomeReq.currency
		};
	}

	return null;
}

export function getYearlyIncomeReq({ visa }: { visa: VisaProgram }) {
	const yearlyIncomeReq = visa.financialRequirements.find((req) => req.type === "yearly");

	if (yearlyIncomeReq) {
		return yearlyIncomeReq;
	}

	const monthlyIncomeReq = visa.financialRequirements.find((req) => req.type === "monthly");

	if (monthlyIncomeReq) {
		return {
			type: "yearly",
			amount: monthlyIncomeReq.amount * 12,
			currency: monthlyIncomeReq.currency
		};
	}

	return null;
}
