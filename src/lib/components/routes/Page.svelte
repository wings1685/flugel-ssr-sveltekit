<script lang="ts">
	import { Form, Find, List } from "#lib/components/features/index.ts";
	import type { PageProps } from "#lib/server/db/types.ts";

	const { data }: PageProps = $props();
</script>
<main>
	<Form />
	<Find />
	<List data={ data.tasks } />
</main>
