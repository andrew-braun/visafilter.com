<script lang="ts">
	import { Slider, type SliderProps } from "melt/builders";

	interface SliderComponentProps {
		onValueChange: (value: number) => void;
		step?: number;
		value?: number;
	}

	let props: SliderComponentProps = $props();
	let { onValueChange, step = 1 }: SliderComponentProps = props;
	let value = $derived(props.value);

	const slider = new Slider({
		onValueChange: (value) => {
			onValueChange(value);
		},
		step,
		value: () => value
	});
</script>

<div class="slider" {...slider.root}>
	<div class="track">
		<div class="range"></div>
		<div {...slider.thumb}></div>
	</div>
</div>

<style lang="scss">
	.slider {
		width: 100%;
		height: 20px;
		margin: 0 auto;

		// padding-block: 16px; /* padding to increase touch area */

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
