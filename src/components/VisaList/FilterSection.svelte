<script lang="ts">
	import Slider from "$components/ui/Slider.svelte";
	import { getMonthlyAmount } from "$root/src/utils/visa/financial";
	import type { VisaData } from "./types";
	import { setIncomeFilter } from "./visastate.svelte";

	let { visaData }: { visaData: VisaData[] } = $props();

	const onSliderValueChange = (value: number) => {
		setIncomeFilter(value);
	};

	// Calculate max monthly income by converting all amounts to monthly
	const maxMonthlyIncome = Math.max(
		...visaData
			.filter((visa) => visa.financial.amount && visa.financial.type)
			.map((visa) => getMonthlyAmount({ visa }))
	);
</script>

<section class="filter-section">
	<div class="filter income-filter">
		<Slider
			onValueChange={onSliderValueChange}
			step={100 / maxMonthlyIncome}
			range={[0, maxMonthlyIncome]}
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

			background: linear-gradient(90deg, var(--color-background-mid), var(--color-secondary) 90%);
		}

		.income-filter {
			position: relative;
		}
	}
</style>
