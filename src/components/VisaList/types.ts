export interface FinancialRequirement {
	amount: number;
	currency: string;
	type: string;
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
		amount: number | null;
		currency: string | null;
		type: string | null;
	};
}
