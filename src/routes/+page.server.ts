import type { VisaData } from "$components/VisaList/types";
import { getVisaData } from "$db/fetch/get-visa-data";
import { getCurrencyRates } from "../lib/external/currency/convert";
import type { PageServerLoad } from "./$types";

export const prerender = true;

export async function load(): Promise<ReturnType<PageServerLoad>> {
	try {
		const visaData = await getVisaData();

		const withCurrencies = await addCurrencies(visaData);

		return { visaData: withCurrencies };
	} catch (error) {
		console.error("Failed to load visa data:", error);
		throw new Error("Failed to load visa data");
	}
}

async function addCurrencies(visaData: VisaData[]) {
	try {
		const currencies = visaData
			.map((item) => item.financial.currency)
			.filter((currency): currency is string => Boolean(currency));

		const { rates } = await getCurrencyRates({ targetCurrencies: currencies });

		if (!rates) {
			throw new Error("Failed to fetch currency rates");
		}

		// Add currency conversion data
		const enrichedVisaData: VisaData[] = visaData.map((item) => {
			const currency = item.financial.currency;

			if (currency && rates[currency]) {
				const amount = item.financial.amount || 0;
				return {
					...item,
					financial: {
						...item.financial,
						currencies: {
							USD: {
								amount: amount * rates[currency].usdRate,
								usdRate: 1,
								symbol: rates[currency].symbol,
								code: "USD"
							},
							[currency]: {
								amount: amount,
								usdRate: 1 / rates[currency].usdRate,
								symbol: rates[currency].symbol,
								code: currency
							}
						}
					}
				};
			}
			return item;
		});

		return enrichedVisaData;
	} catch (error) {
		console.error("Failed to add currency data:", error);
		throw new Error("Failed to add currency data");
	}
}
