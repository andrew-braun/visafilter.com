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
{/if}

<style lang="scss">
	.slider-container {
		display: grid;
		grid-template-columns: 1fr 7fr;
		align-items: end;
		gap: var(--spacing);

		.label {
			grid-column: 1 / 3;
		}
	}

	.input {
		grid-column: 1;
	}
	.slider {
		grid-column: 2;
		width: 96%;
		height: 20px;
		padding-inline: 3%;
		margin: 0 auto 5px auto;

		.track {
			background: grey;
			height: 100%;
			position: relative;
			background: var(--color-background-mid);
			border-radius: 0 var(--border-radius-md) var(--border-radius-md) 0;
		}

		.range {
			position: absolute;
			background: var(--color-accent-3);
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
		width: 20px;
		height: 20px;
		padding: var(--spacing-xs);
		border: var(--border-md);
		border-radius: 50%;
	}
</style>
