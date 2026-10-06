<script lang="ts">
	import Page from "#lib/components/routes/Page.svelte";
	import type { ComponentProps } from "svelte";

	type PageProps = ComponentProps<typeof Page>;
	type Props = {
		data: PageProps;
	};
	const { data }: Props = $props();
</script>
<Page { ...data } />
