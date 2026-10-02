<script lang="ts">
	import { untrack } from "svelte";
	import { defaultTask } from "#lib/_global/lib/defaultValues.ts";
	import type { TaskData } from "#lib/server/db/types.ts";

	type Props = {
		data: TaskData[];
	};
	let { data = $bindable() }: Props = $props();

	const newData = $state<TaskData>(structuredClone({ ...defaultTask }));

	const handleCreate = (e: Event) => {
		e.preventDefault();
		const input = untrack(() => newData);

		data.push(input);
	};
</script>
<div>
	<h1>Input</h1>
	<form onsubmit={ handleCreate }>
		<fieldset>
			<input type="text" bind:value={ newData.title } placeholder="title..." />
		</fieldset>
		<fieldset>
			<input type="text" bind:value={ newData.text } placeholder="text..." />
		</fieldset>
		<fieldset>
			<button>Add</button>
		</fieldset>
	</form>
</div>
