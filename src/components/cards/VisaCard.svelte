<script lang="ts">
	import type { VisaProgram } from '$root/src/db/visas';

	interface VisaCardProps {
		visa: VisaProgram;
	}

	const { visa } = $props();

	const { country, programName, financialRequirements, dependentRequirements } = visa;
	const { name, code } = country;
</script>

<article class="card">
	<header class="card-header">
		<p class="country-name">{name}</p>
		<h3 class="program-name">{programName}</h3>
	</header>

	<section>
		<h3>Financial Requirements</h3>
		<div class="financial-requirements">
			{#each financialRequirements as { amount, currency, type }}
				<p>{amount} {currency} / {type}</p>
			{/each}
		</div>
	</section>
</article>

<style lang="scss">
	.card {
		max-width: 380px;
		margin: var(--spacing-md);
		padding: var(--spacing-md);
		border-radius: var(--border-radius-md);
		box-shadow: var(--shadow-md);

		.card-header {
			display: flex;
			justify-content: space-between;
			gap: var(--spacing-sm);
			margin-bottom: 1rem;

			.country-name,
			.program-name {
				margin: 0;
			}
		}

		section {
			margin-top: 1rem;
		}
	}
</style>
