<script lang="ts">
	import CardRow from "$components/cards/CardRow.svelte";
	import VisaCard from "$components/cards/VisaCard.svelte";
	import { getMonthlyIncomeReq, getYearlyIncomeReq } from "$db/functions/find-data";
	import { sortVisaProgramsByIncome } from "$db/functions/organize-data";
	import { visaPrograms, type VisaProgram } from "$db/visas";
	import FilterSection from "./FilterSection.svelte";
	import { visaFilterState } from "./visastate.svelte";

	function filterVisaProgram({ visa }: { visa: VisaProgram }) {
		if (!visa.financialRequirements) return false;

		const monthlyIncomeReq = getMonthlyIncomeReq({ visa })?.amount || 0;
		const yearlyIncomeReq = getYearlyIncomeReq({ visa })?.amount || 0;

		return visaFilterState.income === 0 || monthlyIncomeReq <= visaFilterState.income;
	}

	const filteredVisaPrograms = $derived(
		sortVisaProgramsByIncome({
			visaPrograms: visaPrograms.filter((visa) => filterVisaProgram({ visa }))
		})
	);
	const filteredVisaCards = $derived(
		filteredVisaPrograms.map((visa: VisaProgram) => ({
			component: VisaCard,
			props: { visa },
			id: `${visa.id}-${visa.country}` // Using country as a unique identifier since each visa program is per country
		}))
	);
</script>

<main class="section visa-list">
	<FilterSection />
	<CardRow cards={filteredVisaCards} />
</main>

<style lang="scss">
	.visa-list {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-vertical-section);
	}
</style>
