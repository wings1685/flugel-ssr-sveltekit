<script lang="ts">
	import { defaultFindValues } from "#lib/_global/lib/validate.ts";
	import { page } from "$app/state";
	import type { FindSchema } from "#lib/_global/lib/validate.ts";

	const defaultValues = $derived.by(() => {
		const params = page.url.searchParams;

		return {
			title: params.get('title') ?? defaultFindValues.title,
			sort: (params.get('sort') ?? defaultFindValues.sort) as FindSchema['sort'],
		};
	});
</script>
<div>
	<h1>Find</h1>
	<form id="find_form">
		<fieldset>
			<input type="text" name="title" value={ defaultValues.title } />
			<label>
				<input type="radio" name="sort" value="asc" checked={ defaultValues.sort === 'asc' } />
				<span>ASC</span>
			</label>
			<label>
				<input type="radio" name="sort" value="desc" checked={ defaultValues.sort === 'desc' } />
				<span>DESC</span>
			</label>
			<button>Find</button>
		</fieldset>
	</form>
</div>
