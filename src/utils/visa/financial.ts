import type { VisaData } from "$components/VisaList/types";

export const getMonthlyAmount = ({
	visa
	// currency = "USD"
}: {
	visa: VisaData;
	// currency?: string;
}) => {
	if (!visa?.financial?.amount) return 0;

	//TODO: run calculations for any currency

	const usdAmount = visa?.financial?.currencies?.USD?.amount as number;

	if (visa.financial.type === "yearly") return usdAmount / 12;
	if (visa.financial.type === "monthly") return usdAmount;
	if (visa.financial.type === "savings") return usdAmount / 24;

	return 0;
};

export function getUsdAmountFromVisa({ visa }: { visa: VisaData }): number {
	if (!visa?.financial) return 0;

	const baseCurrencyCode = visa?.financial?.currency ?? "usd";
	const baseCurrencyAmount = visa?.financial?.amount ?? 0;
	const currencies = visa?.financial?.currencies;

	if (!currencies) return 0;

	const baseCurrency = currencies[baseCurrencyCode];

	let usdAmount = visa?.financial?.currencies?.["USD"]?.amount;

	if (!usdAmount) {
		usdAmount = baseCurrencyAmount * baseCurrency?.usdRate;
	}

	return usdAmount;
}
