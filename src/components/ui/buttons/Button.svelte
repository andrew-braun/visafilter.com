<script lang="ts">
	import type { Snippet } from "svelte";
	import { type HTMLButtonAttributes } from "svelte/elements";

	type ButtonVariant = "default" | "primary" | "secondary" | "ghost" | "link";
	type ButtonSize = "sm" | "md" | "lg";

	interface ButtonProps extends HTMLButtonAttributes {
		variant?: ButtonVariant;
		size?: ButtonSize;
		fullWidth?: boolean;
		children?: Snippet;
	}

	const {
		variant = "default",
		size = "md",
		fullWidth = false,
		type = "button",
		disabled = false,
		class: className = "",
		children = (() => {}) as Snippet,
		...rest
	}: ButtonProps = $props();

	const computedClasses = $derived(
		[
			"button",
			`button-${variant}`,
			`button-${size}`,
			fullWidth && "button-full",
			disabled && "button-disabled",
			className
		]
			.filter(Boolean)
			.join(" ")
	);
</script>

<button type="button" class={computedClasses} {disabled} {...rest}>
	{@render children()}
</button>

<style lang="scss">
	.button {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		border-radius: var(--border-radius-md);
		font-weight: 500;
		transition: all var(--transition-md);
		cursor: pointer;
		outline: none;
		border: var(--border-md);

		&:focus-visible {
			outline: var(--border-md);
			outline-offset: 2px;
		}

		&-full {
			width: 100%;
		}

		&-disabled {
			opacity: 0.5;
			cursor: not-allowed;
		}

		/* Size variants */
		&-sm {
			height: 2rem;
			padding: 0 var(--spacing-sm);
			font-size: var(--font-size-xs);
			gap: var(--spacing-xs);
		}

		&-md {
			height: 2.5rem;
			padding: 0 var(--spacing-md);
			font-size: var(--font-size-sm);
			gap: var(--spacing-sm);
		}

		&-lg {
			height: 3rem;
			padding: 0 var(--spacing-lg);
			font-size: var(--font-size-md);
			gap: var(--spacing-md);
		}

		/* Style variants */
		&-default {
			background-color: var(--color-background-light);
			border-color: var(--color-text-mid);
			color: var(--color-text);

			&:hover:not(:disabled) {
				background-color: var(--color-background-light-mid);
			}

			&:active:not(:disabled) {
				background-color: var(--color-background-mid);
			}
		}

		&-primary {
			background-color: var(--color-primary);
			color: var(--color-text-light);

			&:hover:not(:disabled) {
				background-color: var(--color-accent-1);
			}

			&:active:not(:disabled) {
				background-color: var(--color-accent-2);
			}
		}

		&-secondary {
			background-color: var(--color-secondary);
			color: var(--color-secondary-text);

			&:hover:not(:disabled) {
				background-color: var(--color-background-light-mid);
			}

			&:active:not(:disabled) {
				background-color: var(--color-background-mid);
			}
		}

		&-ghost {
			background-color: transparent;

			&:hover:not(:disabled) {
				background-color: var(--color-background-light-mid);
				opacity: 0.5;
			}

			&:active:not(:disabled) {
				background-color: var(--color-background-mid);
				opacity: 0.7;
			}
		}

		&-link {
			background-color: transparent;
			padding: 0;
			height: auto;
			color: var(--color-primary);
			text-decoration: none;

			&:hover:not(:disabled) {
				text-decoration: underline;
			}
		}
	}
</style>
