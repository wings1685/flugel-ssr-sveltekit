<script lang="ts">
	import Page from "#lib/components/routes/Page.svelte";
	import type { PageProps } from "#lib/server/db/types.ts";

	const { data }: PageProps = $props();
</script>
<Page data={ data } />
