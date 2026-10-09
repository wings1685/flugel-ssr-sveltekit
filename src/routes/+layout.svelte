<script lang="ts">
	import Header from "#lib/components/routes/_parts/Header.svelte";
	import "#lib/_global/styles/global.sass";

	let { children } = $props();
</script>
<main>
	<Header />
	{@render children()}
</main>
