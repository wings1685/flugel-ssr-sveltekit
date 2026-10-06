<script lang="ts">
	import { apiDelete, apiUpdate } from "#lib/_global/lib/api.ts";
	import { refreshAll } from "$app/navigation";
	import type { TaskSchema } from "#lib/_global/lib/validate.ts";

	type Props = {
		tasks: TaskSchema[];
	};
	const { tasks }: Props = $props();

	let editableTasks = $state<TaskSchema[]>([]);

	$effect(() => {
		editableTasks = structuredClone([ ...tasks ]);
	});

	const handleEdit = async (id: TaskSchema['id']) => {
		const targetData = $state.snapshot(editableTasks.find(d => d.id === id));

		await apiUpdate(`/tasks/update/${id}`, targetData);
		await refreshAll();
	};

	const handleDelete = async (id: TaskSchema['id']) => {
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
