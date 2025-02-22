<script lang="ts">
	import Slider from "$components/ui/Slider.svelte";
	import { getMonthlyIncomeReq } from "$db/functions/find-data";
	import { sortVisaProgramsByIncome } from "$db/functions/organize-data";
	import { visaPrograms } from "$db/visas";
	import { setIncomeFilter } from "./visastate.svelte";

	const onSliderValueChange = (value: number) => {
		setIncomeFilter(value);
	};

	const visasSortedByIncome = sortVisaProgramsByIncome({ visaPrograms }).filter(
		(visa) => getMonthlyIncomeReq({ visa })?.amount
	);

	const maxMonthlyIncomeAmount = getMonthlyIncomeReq({ visa: visasSortedByIncome[0] })?.amount || 0;
	// const maxYearlyIncomeAmount = maxMonthlyIncomeAmount * 12;

	// const minMonthlyIncomeAmount =
	// 	getMonthlyIncomeReq({ visa: visaPrograms[visaPrograms.length - 1] })?.amount || 0;
</script>

<section class="filter-section">
	<div class="filter income-filter">
		<Slider
			onValueChange={onSliderValueChange}
			step={0.1}
			range={[0, maxMonthlyIncomeAmount]}
			withInput={true}
			label="Monthly Income (USD)"
			id="income-slider"
		/>
	</div>
</section>

<style lang="scss">
	.filter-section {
		.filter {
			padding: var(--spacing-sm);
			border-radius: var(--border-radius-md);
			background: hsla(0, 0%, 100%, 0.4);
		}

		.income-filter {
			position: relatiive;
		}
	}
</style>
