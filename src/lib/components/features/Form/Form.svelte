<script lang="ts">
	import { createTaskSchema, validateSafeParse } from "#lib/_global/lib/validate.ts";
	import { defaultCreateTaskValues } from "#lib/_global/lib/validate.ts";
	import { refreshAll } from "$app/navigation";
	import type { CreateTaskSchema } from "#lib/_global/lib/validate.ts";
	import { apiCreate } from "#lib/_global/lib/api.ts";

	const defaultCreateValues = structuredClone({ ...defaultCreateTaskValues });
	let newData = $state<CreateTaskSchema>(defaultCreateValues);

	const isSubmitDisabled = $derived.by(() => {
		const result = validateSafeParse(createTaskSchema, newData);

		return !(!!result.success);
	});

	const handleCreate = async (e: Event) => {
		e.preventDefault();

		await apiCreate('/tasks/create', newData);

		newData = defaultCreateValues;
		await refreshAll();
	};
</script>
<div>
	<h1>Input</h1>
	<form onsubmit={ handleCreate }>
		<fieldset>
			<input type="text" name="title" bind:value={ newData.title } placeholder="title..." />
		</fieldset>
		<fieldset>
			<input type="text" name="text" bind:value={ newData.text } placeholder="text..." />
		</fieldset>
		<fieldset>
			<button disabled={ isSubmitDisabled }>Add</button>
		</fieldset>
	</form>
</div>
