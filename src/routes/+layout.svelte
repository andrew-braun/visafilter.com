<script lang="ts">
	import Header from '$components/layout/header/Header.svelte';
	import { siteData } from '$lib/data/site/site-data';

	import '$styles/fonts.css';
	import '$styles/global.css';
	import '$styles/variables.css';

	const { children } = $props();
</script>

<svelte:head>
	<title>{siteData.title}</title>
	<meta name="description" content={siteData.description} />
</svelte:head>

<Header />

<div class="site-container">
	{@render children()}
</div>

<footer class="footer"></footer>

<style lang="scss">
	.site-container {
		max-width: var(--site-max-width);
		margin: auto;
	}

	.footer {
		max-width: var(--site-max-width);
		margin: auto;
	}
</style>
