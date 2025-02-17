interface Country {
	name: string;
	code: string;
}

interface DependentRequirement {
	type: "percentage" | "fixed";
	firstAmount: number; // Amount for first dependent
	subsequentAmount?: number; // Amount for additional dependents
	currency?: string; // Only for fixed amounts
	isSequential?: boolean; // True if dependents should be calculated in order
	appliesTo: ("spouse" | "child")[]; // Which dependent types this rule applies to
}

interface FinancialRequirement {
	type: "monthly" | "yearly" | "savings";
	amount: number;
	currency: string;
	duration?: number;
}

export interface VisaProgram {
	id: number;
	country: Country;
	programName: string;
	financialRequirements: FinancialRequirement[];
	dependentRequirements?: DependentRequirement[];
}

export const visaPrograms: VisaProgram[] = [
	{
		id: 1,
		country: {
			name: "Greece",
			code: "GR"
		},
		programName: "Digital Nomad Visa",
		financialRequirements: [
			{
				type: "monthly",
				amount: 3500,
				currency: "EUR"
			}
		],
		dependentRequirements: [
			{
				type: "percentage",
				firstAmount: 20,
				subsequentAmount: 15,
				isSequential: false,
				appliesTo: ["spouse", "child"]
			}
		]
	},
	{
		id: 2,
		country: {
			name: "Norway",
			code: "NO"
		},
		programName: "Digital Nomad Visa",
		financialRequirements: [
			{
				type: "yearly",
				amount: 35500,
				currency: "EUR"
			}
		]
	},
	{
		id: 3,
		country: {
			name: "Cayman Islands",
			code: "KY"
		},
		programName: "Global Citizen Concierge Program",
		financialRequirements: [
			{
				type: "yearly",
				amount: 100000,
				currency: "USD"
			}
		]
	},
	{
		id: 4,
		country: {
			name: "Antigua and Barbuda",
			code: "AG"
		},
		programName: "Nomad Digital Residence",
		financialRequirements: [
			{
				type: "yearly",
				amount: 50000,
				currency: "USD"
			}
		]
	},
	{
		id: 5,
		country: {
			name: "Turkey",
			code: "TR"
		},
		programName: "Digital Nomad Visa",
		financialRequirements: [
			{
				type: "monthly",
				amount: 3000,
				currency: "USD"
			}
		]
	},
	{
		id: 6,
		country: {
			name: "Japan",
			code: "JP"
		},
		programName: "Digital Nomad Visa",
		financialRequirements: [
			{
				type: "yearly",
				amount: 66400,
				currency: "USD"
			}
		]
	},
	{
		id: 7,
		country: {
			name: "United Arab Emirates",
			code: "AE"
		},
		programName: "Virtual Working Programme",
		financialRequirements: [
			{
				type: "monthly",
				amount: 5000,
				currency: "USD"
			}
		]
	},
	{
		id: 8,
		country: {
			name: "Mauritius",
			code: "MU"
		},
		programName: "Premium Travel Visa",
		financialRequirements: []
	},
	{
		id: 9,
		country: {
			name: "Latvia",
			code: "LV"
		},
		programName: "Digital Nomad Visa",
		financialRequirements: [
			{
				type: "monthly",
				amount: 3400,
				currency: "EUR"
			}
		]
	},
	{
		id: 10,
		country: {
			name: "Cyprus",
			code: "CY"
		},
		programName: "Digital Nomad Visa",
		financialRequirements: [
			{
				type: "monthly",
				amount: 3500,
				currency: "EUR"
			}
		],
		dependentRequirements: [
			{
				type: "fixed",
				firstAmount: 700,
				subsequentAmount: 525,
				currency: "EUR",
				isSequential: true,
				appliesTo: ["spouse", "child"]
			}
		]
	},
	{
		id: 11,
		country: {
			name: "Malta",
			code: "MT"
		},
		programName: "Nomad Residency Permit",
		financialRequirements: [
			{
				type: "monthly",
				amount: 2700,
				currency: "EUR"
			}
		]
	},
	{
		id: 12,
		country: {
			name: "Belize",
			code: "BZ"
		},
		programName: "Work Where You Vacation",
		financialRequirements: [
			{
				type: "yearly",
				amount: 75000,
				currency: "USD"
			}
		]
	},
	{
		id: 13,
		country: {
			name: "El Salvador",
			code: "SV"
		},
		programName: "Digital Nomad Visa",
		financialRequirements: [
			{
				type: "monthly",
				amount: 1460,
				currency: "USD"
			}
		]
	},
	{
		id: 14,
		country: {
			name: "Taiwan",
			code: "TW"
		},
		programName: "Gold Card Program",
		financialRequirements: [
			{
				type: "monthly",
				amount: 5700,
				currency: "USD"
			}
		]
	},
	{
		id: 15,
		country: {
			name: "Portugal",
			code: "PT"
		},
		programName: "D7 Digital Nomad Visa",
		financialRequirements: [
			{
				type: "monthly",
				amount: 3480,
				currency: "EUR"
			}
		]
	},
	{
		id: 16,
		country: {
			name: "Spain",
			code: "ES"
		},
		programName: "Digital Nomad Visa",
		financialRequirements: [
			{
				type: "monthly",
				amount: 2762,
				currency: "EUR"
			}
		]
	},
	{
		id: 17,
		country: {
			name: "Croatia",
			code: "HR"
		},
		programName: "Digital Nomad Residence Permit",
		financialRequirements: [
			{
				type: "monthly",
				amount: 2200,
				currency: "EUR"
			}
		]
	},
	{
		id: 18,
		country: {
			name: "Iceland",
			code: "IS"
		},
		programName: "Long-term Remote Work Visa",
		financialRequirements: [
			{
				type: "monthly",
				amount: 7075,
				currency: "EUR"
			}
		]
	},
	{
		id: 19,
		country: {
			name: "Brazil",
			code: "BR"
		},
		programName: "Digital Nomad Visa",
		financialRequirements: [
			{
				type: "monthly",
				amount: 1500,
				currency: "USD"
			}
		]
	},
	{
		id: 20,
		country: {
			name: "Barbados",
			code: "BB"
		},
		programName: "Welcome Stamp",
		financialRequirements: [
			{
				type: "yearly",
				amount: 50000,
				currency: "USD"
			}
		]
	}
];
