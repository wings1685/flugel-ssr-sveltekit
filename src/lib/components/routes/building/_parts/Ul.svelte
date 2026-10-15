<script lang="ts">
	import { onMount, untrack } from "svelte";
	import { buildingData, buildPerformance } from "../_models/performance";
	import type { LiPatternsProps } from "../_models/performance";

	const { number }: LiPatternsProps = $props();

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
