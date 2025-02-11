<script lang="ts">
	import type { InputProps, NumberInputProps, TextInputProps } from "./input-types";
	import NumberInput from "./NumberInput.svelte";

	let { value = $bindable(), ...props } = $props();

	let { type = "text", label, id, orientation = "vertical" } = props;
</script>

{#snippet numberInput()}
	<NumberInput {...props as NumberInputProps} bind:value />
{/snippet}

{#snippet textInput()}
	<input {...props as TextInputProps} value={Number(value)} />
{/snippet}

<div class="input-container" class:vertical={orientation === "vertical"}>
	<label for={id}>{label}</label>
	{#if type === "number"}
		{@render numberInput()}
	{:else}
		{@render textInput()}
	{/if}
</div>

<style lang="scss">
	.input-container {
		display: flex;
		gap: var(--spacing-xs);

		&.vertical {
			flex-direction: column;
		}
	}
</style>
