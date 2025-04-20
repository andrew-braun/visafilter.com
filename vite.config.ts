import { sveltekit } from "@sveltejs/kit/vite";
import Icons from "unplugin-icons/vite";
import { defineConfig } from "vitest/config";

export default defineConfig({
	plugins: [
		sveltekit(),
		Icons({
			compiler: "svelte"
		})
	],

	test: {
		include: ["src/**/*.{test,spec}.{js,ts}"]
	},

	css: {
		preprocessorOptions: {
			scss: {
				api: "modern",
				additionalData: `@use '$styles/scss-variables' as *; 
				@use '$styles/mixins.scss' as *;`
			}
		}
	}
});
