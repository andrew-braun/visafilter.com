<script lang="ts">
	import Input from "$components/ui/inputs/Input.svelte";
	import Slider from "$components/ui/Slider.svelte";
	import { setIncomeFilter, visaFilterState } from "./visastate.svelte";

	const { income } = $derived(visaFilterState);

	const onSliderValueChange = (value: number) => {
		setIncomeFilter((value / 100) * 500000);
	};

	const onInputValueChange = (event: Event) => {
		if (!(event.target instanceof HTMLInputElement)) return;

		setIncomeFilter(parseInt(event.target.value));
	};
</script>

<section class="filter-section">
	<div class="income-filter">
		<Input
			type="number"
			value={Math.trunc(income)}
			label="Income"
			id="income"
			step={500}
			onchange={onInputValueChange}
			showButtons={false}
		/>
		<Slider onValueChange={onSliderValueChange} step={0.1} value={(income / 500000) * 100} />
	</div>
</section>

<style lang="scss">
	.filter-section {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-sm);

		.income-filter {
			display: flex;
			flex-direction: grid;
			grid-template-columns: 1fr 7fr;
			gap: var(--spacing-sm);
			align-items: end;
		}
	}
</style>
