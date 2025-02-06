<script lang="ts">
	import Slider from '$components/ui/Slider.svelte';
	import { formatMoney } from '$root/src/utils/numbers';
	import { setIncomeFilter, visaFilterState } from './visastate.svelte';

	const { income } = $derived(visaFilterState);

	const incomeValue = $derived(formatMoney({ amount: income, currency: 'USD' }));

	const onValueChange = (value: number) => {
		setIncomeFilter((value / 100) * 500000);
	};
</script>

<section class="filter-section">
	<div class="income-filter">
		<div class="income-value">
			<span>Income: </span>
			<span>{incomeValue}</span>
		</div>
		<Slider {onValueChange} step={0.1} />
	</div>
</section>
