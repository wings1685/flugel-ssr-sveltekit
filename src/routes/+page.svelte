<script lang="ts">
	import Page from "#lib/components/routes/Page.svelte";
	import type { DeepGuard, PageProps } from "#lib/_global/lib/types.ts";

	const { data }: DeepGuard<PageProps> = $props();
</script>
<Page data={ data } />
