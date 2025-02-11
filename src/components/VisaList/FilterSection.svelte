<script lang="ts">
	import Slider from "$components/ui/Slider.svelte";
	import { setIncomeFilter, visaFilterState } from "./visastate.svelte";

	const { income } = $derived(visaFilterState);

	const onSliderValueChange = (value: number) => {
		setIncomeFilter(value);
	};
</script>

<section class="filter-section">
	<div class="income-filter">
		<Slider onValueChange={onSliderValueChange} step={0.1} range={[0, 500000]} withInput={true} />
	</div>
</section>

<style lang="scss">
	.filter-section {
		.income-filter {
			position: relatiive;
		}
	}
</style>
