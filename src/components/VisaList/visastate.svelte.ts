export const visaFilterState = $state({
	income: 0
});

export const setIncomeFilter = (income: number) => {
	visaFilterState.income = income;
};
