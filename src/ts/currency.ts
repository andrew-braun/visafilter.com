export interface Currency {
	amount?: number;
	usdRate: number;
	symbol: string;
	code: string;
}

export interface Currencies {
	[key: string]: Currency;
}
