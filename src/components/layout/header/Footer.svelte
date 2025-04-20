<script>
	import { EarthIcon } from "$root/src/lib/icons";
</script>

<footer class="footer">
	<div class="footer-column">
		<div class="footer-attribution">
			<EarthIcon />
			<p class="attribution-text">
				Made by <a href="https://andribraun.dev" target="_blank">Andri Braun</a>
			</p>
		</div>
	</div>
</footer>

<style lang="scss">
	.footer {
		display: flex;
		justify-content: center;
		max-width: var(--site-max-width);
		margin: auto;
		padding: var(--spacing-vertical-section) var(--spacing-gutters);

		.footer-attribution {
			display: flex;
			align-items: center;
			gap: var(--spacing-sm);
			font-size: var(--font-size-md);
		}
	}
</style>
