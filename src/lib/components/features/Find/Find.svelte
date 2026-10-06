<script lang="ts">
	import type { FindSchema } from "#lib/_global/lib/validate.ts";

	type Props = {
		findQuery: FindSchema;
	};
	const { findQuery }: Props = $props();
</script>
<div>
	<h1>Find</h1>
	<form id="find_form">
		<fieldset>
			<input type="text" name="title" value={ findQuery.title } />
			<label>
				<input type="radio" name="sort" value="asc" checked={ findQuery.sort === 'asc' } />
				<span>ASC</span>
			</label>
			<label>
				<input type="radio" name="sort" value="desc" checked={ findQuery.sort === 'desc' } />
				<span>DESC</span>
			</label>
			<button>Find</button>
		</fieldset>
	</form>
</div>
