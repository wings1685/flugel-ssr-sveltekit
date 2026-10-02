<script lang="ts">
	import type { TaskItem } from "#lib/server/db/types.ts";
	import { untrack } from "svelte";

	type Props = {
		data: TaskItem[];
	};
	const { data }: Props = $props();
	let tasks = $state<TaskItem[]>();

	$effect(() => {
		tasks = data;
	});

	const handleEdit = (e: Event, id: TaskItem['id']) => {
		e.preventDefault();
		const input = data.find(d => d.id === id);
		if (!input) return;
	};
	const handleDelete = (e: Event, id: TaskItem['id']) => {
		e.preventDefault();
		return
	};
	$effect(() => {
		console.log(data);
	});
</script>
<div>
	<h1>List</h1>
	<ul>
{#each tasks as task, index}
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
