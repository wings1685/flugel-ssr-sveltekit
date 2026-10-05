<script lang="ts">
	import { Form, Find, List } from "#lib/components/features/index.ts";
	import type { DeepGuard, PageProps } from "#lib/_global/lib/types.ts";

	const { data }: DeepGuard<PageProps> = $props();
</script>
<main>
	<Form />
	<Find />
	<List data={ data.tasks } />
</main>
