export interface VisaData {
	visaId: number;
	programName: string;
	countryName: string;
	countryAlpha2: string;
	countryRegion?: string | null;
	countrySubregion?: string | null;
	financialId: number;
	financialAmount: number | null;
	financialCurrency: string | null;
	requirementType: string | null;
}
