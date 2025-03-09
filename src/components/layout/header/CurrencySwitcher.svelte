<script lang="ts">
	import { onMount } from "svelte";

	let currencies = ["USD", "EUR", "GBP"];
	let selectedCurrency = "USD";
	let rates: Record<string, number> = {};
	let isOpen = false;

	async function fetchRates() {
		try {
			const response = await fetch("https://api.exchangerate-api.com/v4/latest/USD");
			const data = await response.json();
			rates = data.rates;
		} catch (error) {
			console.error("Error fetching currency rates:", error);
		}
	}

	function toggleDropdown() {
		isOpen = !isOpen;
	}

	function selectCurrency(currency: string) {
		selectedCurrency = currency;
		isOpen = false;
	}

	onMount(() => {
		fetchRates();
		// Fetch rates every hour
		const interval = setInterval(fetchRates, 3600000);
		return () => clearInterval(interval);
	});
</script>

<div class="currency-switcher">
	<button
		class="currency-button"
		on:click={toggleDropdown}
		aria-haspopup="true"
		aria-expanded={isOpen}
	>
		{selectedCurrency}
	</button>

	{#if isOpen}
		<div class="dropdown" role="listbox" aria-label="Select currency">
			{#each currencies as currency}
				<button
					class="currency-option"
					class:selected={currency === selectedCurrency}
					on:click={() => selectCurrency(currency)}
					role="option"
					aria-selected={currency === selectedCurrency}
				>
					{currency}
				</button>
			{/each}
		</div>
	{/if}
</div>

<style lang="scss">
	.currency-switcher {
		position: relative;
		display: inline-block;
	}

	.currency-button {
		background: var(--color-surface);
		border: 1px solid var(--color-border);
		padding: 0.5rem 1rem;
		border-radius: 4px;
		cursor: pointer;
		font-size: var(--font-size-sm);
		color: var(--color-text);

		&:hover {
			background: var(--color-surface-hover);
		}
	}

	.dropdown {
		position: absolute;
		top: 100%;
		right: 0;
		margin-top: 0.25rem;
		background: var(--color-surface);
		border: 1px solid var(--color-border);
		border-radius: 4px;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
		z-index: 100;
	}

	.currency-option {
		display: block;
		width: 100%;
		padding: 0.5rem 1rem;
		border: none;
		background: none;
		text-align: left;
		cursor: pointer;
		color: var(--color-text);
		font-size: var(--font-size-sm);

		&:hover {
			background: var(--color-surface-hover);
		}

		&.selected {
			background: var(--color-primary);
			color: var(--color-text-inverse);
		}
	}
</style>
