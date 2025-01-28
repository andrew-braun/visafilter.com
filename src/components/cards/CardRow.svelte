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
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		gap: var(--spacing-xs);
	}
</style>
