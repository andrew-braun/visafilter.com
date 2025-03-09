<script lang="ts">
	import VisaList from "$components/VisaList/VisaList.svelte";
	import type { PageProps } from "./$types";
	let { data }: PageProps = $props();

	console.log(data);
</script>

<VisaList visaData={data.visaData} />
