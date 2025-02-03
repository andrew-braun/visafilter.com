<script lang="ts">
	interface CardRowProps {
		cards: any[];
	}

	const { cards } = $props();
</script>

<div class="card-row">
	{#each cards as card, index}
		<card.component {...card.props} key={index} />
	{/each}
</div>

<style lang="scss">
	.card-row {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
		grid-template-rows: auto auto 1fr; /* Define explicit rows */
		gap: var(--spacing-md);
		max-width: 100%;
	}
</style>
