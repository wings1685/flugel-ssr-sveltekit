<script lang="ts">
	import { Form, Find, List } from "#lib/components/features/index.ts";
	import type { ComponentProps } from "svelte";

	type ListProps = ComponentProps<typeof List>;
	type FindProps = ComponentProps<typeof Find>;
	type Props = ListProps & {
		findQuery: FindProps;
	};
	const { tasks, findQuery }: Props = $props();
</script>
<main>
	<Form />
	<Find { ...findQuery } />
	<List { tasks } />
</main>
