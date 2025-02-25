<script lang="ts">
	import type { VisaData } from "$components/VisaList/types";
	import "/node_modules/flag-icons/css/flag-icons.min.css";

	interface FinancialRequirement {
		amount: number;
		currency: string;
		type: string;
	}

	interface VisaCardProps {
		visa: {
			id: number;
			name: string;
			country: string;
			countryCode: string;
			region: string;
			subRegion: string;
			financialRequirements: FinancialRequirement;
		};
	}

	const { visa }: VisaCardProps = $props();
</script>

<article class="card">
	<header class="card-header">
		<div class="title-container">
			<span class={`flag fi fi-${visa.countryCode.toLowerCase()}`}></span>
			<span class={`country-name-wrapper flag fi fi-${visa.countryCode.toLowerCase()}`}>
				<span class="country-name">{visa.country}</span>
			</span>
		</div>
		<p class="program-name">{visa.name}</p>
	</header>

	<section class="financial-requirements">
		<div class="requirement">
			<span class="amount"
				>{visa.financialRequirements.amount} {visa.financialRequirements.currency}</span
			>
			<span class="type">{visa.financialRequirements.type}</span>
		</div>
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
			content: "";
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

				.country-name-wrapper {
					background-clip: text;
					width: 100%;
					background-repeat: repeat;
					.country-name {
						margin: 0;
						font-size: var(--font-size-xl);
						font-weight: 800;
						color: hsla(0, 0%, 100%, 0.4);
					}
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
