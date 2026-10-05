<script lang="ts">
	import { apiDelete, apiUpdate } from "#lib/_global/lib/api.ts";
	import { refreshAll } from "$app/navigation";
	import type { TaskItem } from "#lib/server/db/types.ts";
	import type { DeepGuard } from "#lib/_global/lib/types.ts";

	type Props = {
		data: TaskItem[];
	};
	const { data }: DeepGuard<Props> = $props();

	let tasks = $state<TaskItem[]>([]);

	$effect(() => {
		tasks = structuredClone([ ...data ]);
	});

	const handleEdit = async (id: TaskItem['id']) => {
		const targetData = $state.snapshot(tasks.find(d => d.id === id));
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
{#each tasks as task, index (task.id)}
		<li>
			<input type="text" bind:value={ tasks[index].title } />
			<input type="text" bind:value={ tasks[index].text } />
			<button type="button" onclick={ () => handleEdit(task.id) }>Edit</button>
			<button type="button" onclick={ () => handleDelete(task.id) }>Delete</button>
		</li>
{/each}
	</ul>
</div>
