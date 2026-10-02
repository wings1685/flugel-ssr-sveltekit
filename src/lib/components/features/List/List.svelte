<script lang="ts">
	import type { TaskData } from "#lib/server/db/types.ts";

	type Props = {
		data: TaskData[];
	};
	let { data }: Props = $props();

	const handleEdit = (e: Event, id: TaskData['id']) => {
		e.preventDefault();
		const input = data.find(d => d.id === id);
		if (!input) return;
	};
	const handleDelete = (e: Event, id: TaskData['id']) => {
		e.preventDefault();
		data = data.filter(d => d.id !== id);
	};
</script>
<div>
	<h1>List</h1>
	<ul>
{#each data as task}
		<li>
			<input type="text" bind:value={ task.title } />
			<input type="text" bind:value={ task.text } />
			<button type="button" onclick={ e => handleEdit(e, task.id) }>Edit</button>
			<button type="button" onclick={ e => handleDelete(e, task.id) }>Delete</button>
		</li>
{:else}
		<li>Task Not Found.</li>
{/each}
	</ul>
</div>
