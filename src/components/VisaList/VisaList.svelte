<script lang="ts">
	import CardRow from '$components/cards/CardRow.svelte';
	import VisaCard from '$components/cards/VisaCard.svelte';

	import { visaPrograms } from '$db/visas';
	import FilterSection from './FilterSection.svelte';

	const visaCards = visaPrograms.map((visa) => ({
		component: VisaCard,
		props: { visa }
	}));
</script>

<main class="section visa-list">
	<FilterSection />
	<CardRow cards={visaCards} />
</main>

<style lang="scss">
	.visa-list {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-vertical-section);
	}
</style>
