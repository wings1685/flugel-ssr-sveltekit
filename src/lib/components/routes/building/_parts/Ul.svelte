<script lang="ts">
	import { onMount, untrack } from "svelte";
	import { buildingData, buildPerformance } from "../_models/performance";

	type Props = {
		number: 10 | 1000 | 100000;
	};
	const { number }: Props = $props();

	const data = buildingData(untrack(() => number));

	onMount(() => {
		buildPerformance();
	});
</script>
<ul>
	{#each data as item}
		<li>{ item }</li>
	{/each}
</ul>
