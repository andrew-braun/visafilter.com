<script lang="ts">
	import type { NumberInputProps } from "./input-types";

	let { value = $bindable(), ...props }: NumberInputProps = $props();
	let { step = 1, min = 0, max, placeholder, onchange, showButtons = true } = props;

	let increment = () => {
		value = Number(value) + step;
	};

	let decrement = () => {
		value = Number(value) - step;
	};
</script>

<div class="number-input-container">
	{#if showButtons}
		<button class="number-button" onclick={decrement}><span>−</span></button>
	{/if}
	<input
		class="number-input"
		type="number"
		{onchange}
		bind:value
		{min}
		{max}
		{step}
		{placeholder}
	/>
	{#if showButtons}
		<button class="number-button" onclick={increment}><span>+</span></button>
	{/if}
</div>

<style lang="scss">
	input[type="number"]::-webkit-inner-spin-button,
	input[type="number"]::-webkit-outer-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}

	/* Firefox */
	input[type="number"] {
		appearance: textfield;
		-moz-appearance: textfield;
	}

	.number-input-container {
		display: flex;
		align-items: center;
		gap: var(--spacing-sm);

		.number-input {
			padding: var(--spacing-xs);
			border: 1px solid var(--color-border);
			border-radius: var(--border-radius-sm);
			background: var(--color-background-mid);
			font-size: var(--font-size-md);
			color: var(--color-text);
			text-align: center;
		}

		.number-button {
			display: flex;
			align-items: center;
			aspect-ratio: 1;
			padding: var(--spacing-sm);
			border: none;
			border-radius: var(--border-radius-md);
			background: var(--color-primary);
			color: var(--color-on-primary);
			font-size: var(--font-size-lg);
			cursor: pointer;
			transition: var(--transition-md);

			&:hover {
				background: var(--color-accent-2);
			}
		}
	}
</style>
