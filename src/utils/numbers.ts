interface FormatMoneyProps {
	amount: number;
	currency: string;
}

export function formatMoney({ amount, currency }: FormatMoneyProps) {
	return new Intl.NumberFormat('en-US', {
		style: 'currency',
		maximumSignificantDigits: 3,
		currency
	}).format(amount);
}
