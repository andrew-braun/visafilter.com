<script lang="ts">
	interface CardRowProps {
		cards: any[];
	}

	const { cards }: CardRowProps = $props();
	$inspect(
		"cardrow: ",
		cards.map((card) => card.props.visa.country)
	);
</script>

<div class="card-row">
	{#each cards as card (card.id)}
		<card.component {...card.props} />
	{/each}
</div>

<style lang="scss">
	.card-row {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
		grid-template-rows: auto auto 1fr; /* Define explicit rows */
		gap: var(--spacing-lg);
		max-width: 100%;
	}
</style>
