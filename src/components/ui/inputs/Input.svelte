<script lang="ts">
	import type { InputProps } from './input-types';

	let props: InputProps = $props();
	let value = $derived(props.value);
	let { type = 'text', label, id, orientation = 'vertical' } = props;
</script>

{#snippet numberInput()}
	<input {...props} {value} />
{/snippet}

{#snippet textInput()}
	<input {...props} {value} />
{/snippet}

<div class="input-container" class:vertical={orientation === 'vertical'}>
	<label for={id}>{label}</label>
	{#if type === 'number'}
		{@render numberInput()}
	{:else}
		{@render textInput()}
	{/if}
</div>

<style lang="scss">
	.input-container {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-xs);

		&.vertical {
			flex-direction: column;
		}

		label {
			font-size: var(--font-size-sm);
			color: var(--color-text-mid);
		}

		input {
			padding: var(--spacing-xs);
			border: 1px solid var(--color-border);
			border-radius: var(--border-radius-sm);
			font-size: var(--font-size-md);
		}
	}
</style>
