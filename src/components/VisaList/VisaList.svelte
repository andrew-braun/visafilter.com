<script lang="ts">
	import CardRow from "$components/cards/CardRow.svelte";
	import VisaCard from "$components/cards/VisaCard.svelte";
	import FilterSection from "./FilterSection.svelte";
	import type { VisaData } from "./types";
	import { visaFilterState } from "./visastate.svelte";

	let { visaData }: { visaData: VisaData[] } = $props();

	function filterVisaProgram(visa: VisaData) {
		// No filtering if no income filter is set or if requirement is savings type
		if (visaFilterState.income === 0 || visa.requirementType === "savings") return true;

		// Skip if no financial requirements
		if (!visa.financialAmount || !visa.requirementType) return false;

		// Handle monthly requirements
		if (visa.requirementType === "monthly") {
			return visa.financialAmount <= visaFilterState.income;
		}

		// Handle yearly requirements
		if (visa.requirementType === "yearly") {
			const annualIncome = visaFilterState.income * 12;
			return visa.financialAmount <= annualIncome;
		}

		return false;
	}

	const filteredVisaPrograms = $derived(
		visaData.filter(filterVisaProgram).sort((a, b) => {
			// Convert all amounts to monthly for consistent sorting
			const getMonthlyAmount = (visa: VisaData) => {
				if (!visa.financialAmount) return 0;
				if (visa.requirementType === "yearly") return visa.financialAmount / 12;
				if (visa.requirementType === "monthly") return visa.financialAmount;
				return 0; // For savings or undefined
			};
			return getMonthlyAmount(b) - getMonthlyAmount(a);
		})
	);

	const filteredVisaCards = $derived(
		filteredVisaPrograms.map((visa) => ({
			component: VisaCard,
			props: {
				visa: {
					id: visa.visaId,
					name: visa.programName,
					country: visa.countryName,
					countryCode: visa.countryAlpha2,
					region: visa.countryRegion || "",
					subRegion: visa.countrySubregion || "",
					financialRequirements: {
						id: visa.financialId || 0,
						amount: visa.financialAmount || 0,
						currency: visa.financialCurrency || "USD",
						type: visa.requirementType || "monthly"
					}
				}
			},
			id: `${visa.visaId}-${visa.financialId}`
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
