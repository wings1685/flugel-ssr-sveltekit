<script lang="ts">
	import { createTaskSchema, validateSafeParse } from "#lib/_global/lib/validate.ts";
	import { defaultCreateValues, create } from "./_models/usePage";
	import { refreshAll } from "$app/navigation";
	import type { CreateTaskSchema } from "#lib/_global/lib/validate.ts";

	let newData = $state<CreateTaskSchema>(defaultCreateValues);

	const isSubmitDisabled = $derived.by(() => {
		const result = validateSafeParse(createTaskSchema, newData);

		return !(!!result.success);
	});

	const handleCreate = async (e: Event) => {
		e.preventDefault();

		await create(newData);

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
