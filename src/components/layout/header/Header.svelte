<script lang="ts">
	import { siteData } from '$lib/data/site/site-data';

	console.log(siteData);
</script>

<header class="header">
	<p class="site-brand">{siteData.name}</p>
	<p class="tagline">{siteData.tagline}</p>
</header>

<style lang="scss">
	.header {
		margin-bottom: var(--spacing-lg);
		padding: 0 var(--spacing-gutters);

		.site-brand {
			@include gradient-text(--gradient-2);
			width: fit-content;
			margin: 0;
			font-weight: 800;
			font-size: var(--font-size-xl);
		}

		.tagline {
			width: fit-content;
			margin: 0 0 var(--spacing-md) 0;
		}
	}
</style>
