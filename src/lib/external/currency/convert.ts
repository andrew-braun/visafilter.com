import { CURRENCYBEACON_API_KEY } from "$env/static/private";
import type { Currency } from "$root/src/ts/currency";

// server

interface GetCurrencyRatesProps {
	baseCurrency?: string;
	targetCurrencies: string[];
}

interface GetCurrencyRatesReturnType {
	rates: Record<string, Currency>;
}

export async function getCurrencyRates({
	baseCurrency = "USD",
	targetCurrencies
}: GetCurrencyRatesProps): Promise<GetCurrencyRatesReturnType> {
	try {
		const apiKey = CURRENCYBEACON_API_KEY;
		if (!apiKey) throw new Error("CURRENCYBEACON_API_KEY is not set");

		const uniqueTargetCurrencies = [...new Set(targetCurrencies)];

		const response = await fetch(
			`https://api.currencybeacon.com/v1/latest?api_key=${apiKey}&base=${baseCurrency}&symbols=${uniqueTargetCurrencies.join(",")}`
		);

		if (!response.ok) {
			throw new Error(`Currency API error: ${response.statusText}`);
		}

		const data = await response.json();

		const rates = data.rates;

		// Create a map of currency to rate and symbol
		const rateMap: Record<string, Currency> = {};
		for (const currency of targetCurrencies) {
			const rate = rates[currency];
			if (rate) {
				// Use $ for USD, currency code as symbol for others
				rateMap[currency] = {
					usdRate: 1 / rate, // Convert to USD
					symbol: currency === "USD" ? "$" : currency,
					code: currency
				};
			}
		}

		return { rates: rateMap };
	} catch (error) {
		console.error("Failed to fetch currency rates:", error);
		throw new Error("Failed to fetch currency rates");
	}
}
