<script lang="ts">
	import type { FindSchema } from "#lib/_global/lib/validate.ts";

	const { title, sort }: FindSchema = $props();
</script>
<div>
	<h1>Find</h1>
	<form id="find_form">
		<fieldset>
			<input type="text" name="title" value={ title } />
			<label>
				<input type="radio" name="sort" value="asc" checked={ sort === 'asc' } />
				<span>ASC</span>
			</label>
			<label>
				<input type="radio" name="sort" value="desc" checked={ sort === 'desc' } />
				<span>DESC</span>
			</label>
			<button>Find</button>
		</fieldset>
	</form>
</div>
