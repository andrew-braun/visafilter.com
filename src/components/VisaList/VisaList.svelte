<script lang="ts">
	import CardRow from "$components/cards/CardRow.svelte";
	import VisaCard from "$components/cards/VisaCard.svelte";
	import { getMonthlyAmount } from "$root/src/utils/visa/financial";
	import FilterSection from "./FilterSection.svelte";
	import type { VisaData } from "./types";
	import { visaFilterState } from "./visastate.svelte";

	let { visaData }: { visaData: VisaData[] } = $props();

	function filterVisaProgram(visa: VisaData) {
		// No filtering if no income filter is set or if requirement is savings type
		if (visaFilterState.income === 0 || visa.financial.type === "savings") return true;

		// Skip if no financial requirements
		if (!visa.financial.amount || !visa.financial.type) return false;

		// Handle monthly requirements
		if (visa.financial.type === "monthly") {
			return visa.financial.amount <= visaFilterState.income;
		}

		// Handle yearly requirements
		if (visa.financial.type === "yearly") {
			const annualIncome = visaFilterState.income * 12;
			return visa.financial.amount <= annualIncome;
		}

		return false;
	}

	const filteredVisaPrograms = $derived(
		visaData.filter(filterVisaProgram).sort((a, b) => {
			// Convert all amounts to monthly for consistent sorting

			return getMonthlyAmount(a) - getMonthlyAmount(b);
		})
	);

	const filteredVisaCards = $derived(
		filteredVisaPrograms.map((visa) => ({
			component: VisaCard,
			props: {
				visa
			},
			id: `${visa.program.id}-${visa.financial.id}`
		}))
	);
</script>

<main class="section visa-list">
	<FilterSection {visaData} />
	<CardRow cards={filteredVisaCards} />
</main>

<style lang="scss">
	.visa-list {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-vertical-section);
	}
</style>
