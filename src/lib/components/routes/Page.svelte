<script lang="ts">
	import type { TaskData } from "#lib/server/db/types.ts";
	import { Form, Find, List } from "../features";

	let data = $state<TaskData[]>([]);
</script>
<main>
	<Form bind:data={ data } />
	<Find />
	<List data={ data } />
</main>
