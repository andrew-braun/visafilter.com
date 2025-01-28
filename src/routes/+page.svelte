<script lang="ts">
	import VisaCard from '$components/cards/VisaCard.svelte';
	import { visaPrograms } from '$db/visas';
</script>

<main>
	{#each visaPrograms as visa}
		<VisaCard {visa} />
	{/each}
</main>
