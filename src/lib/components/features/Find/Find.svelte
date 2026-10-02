<script lang="ts">
	import { goto } from "$app/navigation";
	import { defailtFindData } from "#lib/_global/lib/defaultValues.ts";

	const findData = $state(defailtFindData);
	const handleFind = (e: Event) => {
		e.preventDefault();
		goto(`/?title=${findData.title}&sort=${findData.sort}`);
	};
</script>
<div>
	<h1>Find</h1>
	<form id="find_form" onsubmit={ handleFind }>
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
