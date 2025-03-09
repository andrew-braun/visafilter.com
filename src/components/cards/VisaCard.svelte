<script lang="ts">
	import type { FinancialRequirement, VisaData } from "$components/VisaList/types";
	import { formatMoney } from "$root/src/utils/numbers";
	import "/node_modules/flag-icons/css/flag-icons.min.css";

	interface VisaCardProps {
		id: string;
		visa: VisaData;
	}

	const { visa }: VisaCardProps = $props();

	const baseCurrencyCode = visa?.financial?.currency;
	const baseCurrencyAmount = visa?.financial?.amount ?? 0;
	const usdAmount =
		visa?.financial?.currencies?.["USD"]?.amount ??
		baseCurrencyAmount * visa?.financial?.currencies?.[baseCurrencyCode]?.usdRate ??
		0;
	const conversionRate = $state(1);
	const convertedCurrencyAmount = $derived(
		formatMoney({ amount: usdAmount * conversionRate, currency: "USD" })
	);
</script>

<article class="card">
	<header class="card-header">
		<div class="title-container">
			<span class={`flag fi fi-${visa.country.alpha2.toLowerCase()}`}></span>
			<span class={`country-name-wrapper flag fi fi-${visa.country.alpha2.toLowerCase()}`}>
				<span class="country-name">{visa.country.name}</span>
			</span>
		</div>
		<p class="program-name">{visa.program.name}</p>
	</header>

	<section class="financial-requirements">
		<div class="requirement">
			{#if visa.financial.amount && visa?.financial?.currencies?.["USD"]}
				<span class="amount"> {convertedCurrencyAmount} USD</span>
			{/if}
			<span class="type">{visa.financial.type}</span>
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
