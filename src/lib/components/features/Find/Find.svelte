<script lang="ts">
	import { defaultFindValues } from "#lib/_global/lib/validate.ts";

	const findData = $state(defaultFindValues);
</script>
<div>
	<h1>Find</h1>
	<form id="find_form">
		<fieldset>
			<input type="text" name="title" bind:value={ findData.title } />
			<label>
				<input type="radio" name="sort" value="asc" bind:group={ findData.sort } />
				<span>ASC</span>
			</label>
			<label>
				<input type="radio" name="sort" value="desc" bind:group={ findData.sort } />
				<span>DESC</span>
			</label>
			<button>Find</button>
		</fieldset>
	</form>
</div>
