<script lang="ts">
	import Slider from "$components/ui/Slider.svelte";
	import type { VisaData } from "./types";
	import { setIncomeFilter } from "./visastate.svelte";

	let { visaData }: { visaData: VisaData[] } = $props();

	const onSliderValueChange = (value: number) => {
		setIncomeFilter(value);
	};

	// Calculate max monthly income by converting all amounts to monthly
	const maxMonthlyIncome = Math.max(
		...visaData
			.filter((visa) => visa.financialAmount && visa.requirementType)
			.map((visa) => {
				if (visa.requirementType === "yearly") {
					return (visa.financialAmount || 0) / 12;
				}
				if (visa.requirementType === "monthly") {
					return visa.financialAmount || 0;
				}
				return 0; // for savings or undefined
			})
	);
</script>

<section class="filter-section">
	<div class="filter income-filter">
		<Slider
			onValueChange={onSliderValueChange}
			step={0.1}
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
			background: hsla(0, 0%, 100%, 0.4);
		}

		.income-filter {
			position: relative;
		}
	}
</style>
