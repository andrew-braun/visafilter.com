import type { Currencies } from "$root/src/ts/currency";

export interface FinancialRequirement {
	amount: number;
	currency: string;
	type: string;
	currencies: Currencies;
}

export interface VisaData {
	program: {
		id: number;
		name: string;
	};
	country: {
		name: string;
		alpha2: string;
		region: string | null;
		subregion: string | null;
	};
	financial: {
		id: number;
		amount: number;
		currency: string;
		type: string;
		currencies: Currencies;
	};
}
