import type { VisaData } from "$components/VisaList/types";

export const getMonthlyAmount = (visa: VisaData, currency: string = "USD") => {
	if (!visa?.financial?.amount) return 0;
	if (currency) {
		console.log(currency);
	}

	//TODO: run calculations for any currency

	const usdAmount = visa.financial.currencies.USD.amount as number;

	if (visa.financial.type === "yearly") return usdAmount / 12;
	if (visa.financial.type === "monthly") return usdAmount;
	if (visa.financial.type === "savings") return usdAmount / 24;

	return 0;
};
