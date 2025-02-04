<script lang="ts">
	import type { VisaProgram } from '$root/src/db/visas';
	import '/node_modules/flag-icons/css/flag-icons.min.css';

	interface VisaCardProps {
		visa: VisaProgram;
	}

	const { visa }: VisaCardProps = $props();
	const { country, programName, financialRequirements, dependentRequirements } = visa;
	const { name, code } = country;
</script>

<article class="card">
	<header class="card-header">
		<div class="title-container">
			<span class={`flag fi fi-${code.toLowerCase()}`}></span>
			<h3 class="country-name">{name}</h3>
		</div>
		<p class="program-name">{programName}</p>
	</header>

	<section class="financial-requirements">
		{#each financialRequirements as { amount, currency, type }}
			<div class="requirement">
				<span class="amount">{amount} {currency}</span>
				<span class="type">{type}</span>
			</div>
		{/each}
	</section>
</article>

<style lang="scss">
	.card {
		position: relative;
		overflow: hidden;
		display: grid;
		grid-template-rows: subgrid;
		grid-row: span 3;
		background: var(--color-background-mid);
		border-radius: var(--border-radius-lg);
		transition:
			transform var(--transition-md),
			box-shadow var(--transition-md);

		&:hover {
			transform: translateY(-4px);
			box-shadow: var(--shadow-md);
		}

		&::before {
			content: '';
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			height: 4px;
			background: var(--gradient-2);
		}

		.card-header {
			padding: var(--spacing-lg);
			background: var(--color-background);

			.title-container {
				display: flex;
				align-items: center;
				gap: var(--spacing-sm);

				.flag {
					font-size: 1.5em;
				}

				.country-name {
					margin: 0;
					font-size: var(--font-size-xl);
					font-weight: 800;
					background: var(--gradient-1);
					-webkit-background-clip: text;
					background-clip: text;
					color: transparent;
				}
			}

			.program-name {
				margin: var(--spacing-xs) 0 0;
				font-size: var(--font-size-md);
				color: var(--color-text-mid-dark);
				font-weight: 500;
			}
		}

		.financial-requirements {
			width: clamp(240px, 80%, 100%);
			margin: auto;

			.requirement {
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding: var(--spacing-md);
				background: var(--color-background);
				border-radius: var(--border-radius-md);

				.amount {
					font-weight: 600;
					font-size: var(--font-size-md);
				}

				.type {
					color: var(--color-text-mid-dark);
					font-size: var(--font-size-sm);
				}
			}
		}
	}
</style>
