<script lang="ts">
	import { siteData } from '$lib/data/site/site-data';

	// import "$styles/fonts.css";
	import '$styles/global.css';
	import '$styles/variables.css';

	const { children } = $props();
</script>

<svelte:head>
	<title>{siteData.title}</title>
	<meta name="description" content={siteData.description} />
</svelte:head>

<header class="header"></header>

<main class="main">
	{@render children()}
</main>

<footer class="footer"></footer>

<style lang="scss">
	.main {
		max-width: var(--site-max-width);
		margin: auto;
	}

	.footer {
		max-width: var(--site-max-width);
		margin: auto;
	}
</style>
