<script lang="ts">
	import { apiDelete, apiUpdate } from "#lib/_global/lib/api.ts";
	import { refreshAll } from "$app/navigation";
	import type { TaskItem } from "#lib/server/db/types.ts";

	type Props = {
		tasks: TaskItem[];
	};
	const { tasks }: Props = $props();

	let editableTasks = $state<TaskItem[]>([]);

	$effect(() => {
		editableTasks = structuredClone([ ...tasks ]);
	});

	const handleEdit = async (id: TaskItem['id']) => {
		const targetData = $state.snapshot(editableTasks.find(d => d.id === id));
		if (!targetData) throw new Error('Task Not Found.');

		const { title, text } = targetData;
		const input = { title, text };
		await apiUpdate(`/tasks/update/${id}`, input);
		await refreshAll();
	};

	const handleDelete = async (id: TaskItem['id']) => {
		await apiDelete(`/tasks/delete/${id}`);
		await refreshAll();
	};
</script>
<div>
	<h1>List</h1>
	<ul>
{#each editableTasks as task, index (task.id)}
		<li>
			<input type="text" bind:value={ editableTasks[index].title } />
			<input type="text" bind:value={ editableTasks[index].text } />
			<button type="button" onclick={ () => handleEdit(task.id) }>Edit</button>
			<button type="button" onclick={ () => handleDelete(task.id) }>Delete</button>
		</li>
{/each}
	</ul>
</div>
