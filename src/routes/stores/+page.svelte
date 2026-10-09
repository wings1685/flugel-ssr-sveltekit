<script lang="ts">
	import Page from "#lib/components/routes/stores/Page.svelte";

	const { data } = $props();
</script>
<Page { ...data } />
