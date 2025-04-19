<script lang="ts">
	import { Slider } from "melt/builders";
	import Input from "./inputs/Input.svelte";

	interface SliderComponentProps {
		label?: string;
		id?: string;
		onValueChange: (value: number) => void;
		step?: number;
		range: [number, number];
		withInput?: boolean;
	}

	let props: SliderComponentProps = $props();
	let {
		label = "Value",
		id = "slider",
		onValueChange,
		step = 1,
		range = [0, 100],
		withInput = false
	}: SliderComponentProps = props;

	const scaleValueToPercent = (value: number) => (value / range[1]) * 100;
	const scalePercentToValue = (percent: number) => (percent / 100) * range[1];

	let sliderValue = $state(scaleValueToPercent(range[0]));

	const slider = new Slider({
		onValueChange: (newValue) => {
			const scaledValue = Math.trunc(scalePercentToValue(newValue));
			sliderValue = scaledValue ?? null;

			onValueChange(scaledValue);
		},
		step,
		value: () => (sliderValue / range[1]) * 100
	});

	function handleInputChange(event: Event) {
		let numValue = Number((event.target as HTMLInputElement).value);

		if (isNaN(numValue)) {
			sliderValue = 0;
			onValueChange(0);
			return;
		}

		sliderValue = numValue;
		onValueChange(numValue);
	}
</script>

{#snippet SliderSnippet()}
	<div class="slider" {...slider.root}>
		<div class="track">
			<div class="range"></div>
			<div {...slider.thumb}></div>
		</div>
	</div>
{/snippet}

{#if !withInput}
	{@render SliderSnippet()}
{/if}

{#if withInput}
	<div class="slider-container">
		<label for={id} class="label">{label}</label>
		<div class="controls">
			<div class="input">
				<Input
					type="number"
					value={sliderValue}
					{id}
					step={500}
					onchange={handleInputChange}
					showButtons={false}
				/>
			</div>
			{@render SliderSnippet()}
		</div>
	</div>
{/if}

<style lang="scss">
	.slider-container {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-sm);

		.label {
			width: fit-content;
			padding: var(--spacing-xs) var(--spacing-sm);
			border-radius: var(--border-radius-md);
			background: var(--color-background);
			font-size: var(--font-size-md);
			font-weight: 500;
		}

		.controls {
			display: grid;
			grid-template-columns: min(80px) 6fr;
			align-items: center;
			gap: var(--spacing);
		}
	}

	.slider {
		// width: 90%;
		height: 10px;
		padding: 0px 10px 0px 20px;
		// margin: 0 auto 5px auto;

		.track {
			height: 100%;
			position: relative;
			background: var(--color-background-mid);
			border: 2px solid var(--color-background-mid);
			border-radius: var(--border-radius-md);
		}

		.range {
			position: absolute;
			background: var(--gradient-1);
			inset: 0;
			right: var(--percentage-inv);
			border-radius: var(--border-radius-md) 0 0 var(--border-radius-md);
		}
	}

	.slider [data-melt-slider-thumb] {
		position: absolute;
		background: white;
		left: var(--percentage);
		top: 50%;
		transform: translate(-50%, -50%);
		width: 16px;
		height: 16px;
		padding: var(--spacing-xs);
		border: var(--border-md);
		border-radius: 50%;
	}
</style>
