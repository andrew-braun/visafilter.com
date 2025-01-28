interface Country {
	name: string;
	code: string;
}

interface DependentRequirement {
	type: 'percentage' | 'fixed';
	firstAmount: number; // Amount for first dependent
	subsequentAmount?: number; // Amount for additional dependents
	currency?: string; // Only for fixed amounts
	isSequential?: boolean; // True if dependents should be calculated in order
	appliesTo: ('spouse' | 'child')[]; // Which dependent types this rule applies to
}

interface FinancialRequirement {
	type: 'monthly' | 'yearly' | 'savings';
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
			name: 'Portugal',
			code: 'PT'
		},
		programName: 'D7 Digital Nomad Visa',
		financialRequirements: [
			{
				type: 'monthly',
				amount: 3040,
				currency: 'EUR'
			}
		],
		dependentRequirements: [
			{
				type: 'percentage',
				firstAmount: 50,
				isSequential: false,
				appliesTo: ['spouse']
			},
			{
				type: 'percentage',
				firstAmount: 30,
				isSequential: false,
				appliesTo: ['child']
			}
		]
	},
	{
		id: 2,
		country: {
			name: 'Croatia',
			code: 'HR'
		},
		programName: 'Digital Nomad Residence Permit',
		financialRequirements: [
			{
				type: 'yearly',
				amount: 25932,
				currency: 'EUR'
			}
		]
	},
	{
		id: 3,
		country: {
			name: 'Dubai',
			code: 'AE'
		},
		programName: 'Remote Work Visa',
		financialRequirements: [
			{
				type: 'monthly',
				amount: 5000,
				currency: 'USD'
			}
		]
	},
	{
		id: 4,
		country: {
			name: 'Estonia',
			code: 'EE'
		},
		programName: 'Digital Nomad Visa',
		financialRequirements: [
			{
				type: 'savings',
				amount: 4500,
				currency: 'EUR',
				duration: 6
			}
		]
	},
	{
		id: 5,
		country: {
			name: 'Greece',
			code: 'GR'
		},
		programName: 'Digital Nomad Visa',
		financialRequirements: [
			{
				type: 'monthly',
				amount: 3500,
				currency: 'EUR'
			}
		],
		dependentRequirements: [
			{
				type: 'percentage',
				firstAmount: 20,
				isSequential: false,
				appliesTo: ['spouse']
			},
			{
				type: 'percentage',
				firstAmount: 15,
				isSequential: false,
				appliesTo: ['child']
			}
		]
	},
	{
		id: 6,
		country: {
			name: 'Thailand',
			code: 'TH'
		},
		programName: 'Long Term Resident Visa',
		financialRequirements: [
			{
				type: 'savings',
				amount: 500000,
				currency: 'THB',
				duration: 6
			}
		]
	},
	{
		id: 7,
		country: {
			name: 'Spain',
			code: 'ES'
		},
		programName: 'Digital Nomad Visa',
		financialRequirements: [
			{
				type: 'monthly',
				amount: 2646,
				currency: 'EUR'
			}
		],
		dependentRequirements: [
			{
				type: 'percentage',
				firstAmount: 37.5,
				subsequentAmount: 25,
				isSequential: true,
				appliesTo: ['spouse', 'child']
			}
		]
	}
];
