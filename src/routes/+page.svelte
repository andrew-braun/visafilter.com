<script lang="ts">
	import CardRow from '$components/cards/CardRow.svelte';
	import VisaCard from '$components/cards/VisaCard.svelte';
	import { visaPrograms } from '$db/visas';

	const visaCards = visaPrograms.map((visa) => ({
		component: VisaCard,
		props: { visa }
	}));
</script>

<main>
	<CardRow cards={visaCards} />
</main>
