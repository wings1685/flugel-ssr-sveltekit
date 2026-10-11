<script lang="ts">
	import { rawRunes, setRawRunes } from "#lib/_global/stores/raw.svelte.ts";
	import { apiUpdate } from "#lib/_global/lib/api.ts";
	import { piquoStore } from "#lib/_global/piquo/index.ts";
	import { rawNano, setRawNano } from "#lib/_global/stores/nano.ts";
	import { useStore } from "@nanostores/svelte-runes";
	import type { StoreName } from "#lib/_global/stores/index.ts";

	const {
		rawRunesServer, piquoRunesServer,
		rawNanoServer, piquoNanoServer,
	} = $props();

	const { piquoRunes, setPiquoRunes } = piquoStore('piquoRunes');
	const { piquoNano, setPiquoNano } = piquoStore('piquoNano');
	const rawNanoClient = useStore(rawNano);
	const piquoNanoClient = useStore(piquoNano());

	const handleServerStore = async (key: StoreName) => {
		await apiUpdate('/stores', { key: key });
	};
</script>
<div>
	<h1>Raw Store</h1>
	<fieldset>
		<span>forServer: { rawRunesServer }</span>
		<button onclick={ () => handleServerStore('raw') }>Click</button>
	</fieldset>
	<fieldset>
		<span>forClient: { rawRunes.forClient }</span>
		<button onclick={ () => setRawRunes('forClient') }>Click</button>
	</fieldset>
	<h1>Piquo Store</h1>
	<fieldset>
		<span>forServer: { piquoRunesServer }</span>
		<button onclick={ () => handleServerStore('piquo') }>Click</button>
	</fieldset>
	<fieldset>
		<span>forClient: { piquoRunes().forClient }</span>
		<button onclick={ () => setPiquoRunes('forClient') }>Click</button>
	</fieldset>
	<h1>Raw Nano Stores</h1>
	<fieldset>
		<span>forServer: { rawNanoServer }</span>
		<button onclick={ () => handleServerStore('rawNano') }>Click</button>
	</fieldset>
	<fieldset>
		<span>forClient: { rawNanoClient.current.forClient }</span>
		<button onclick={ () => setRawNano('forClient') }>Click</button>
	</fieldset>
	<h1>Piquo Nano Store</h1>
	<fieldset>
		<span>forServer: { piquoNanoServer }</span>
		<button onclick={ () => handleServerStore('piquoNano') }>Click</button>
	</fieldset>
	<fieldset>
		<span>forClient: { piquoNanoClient.current.forClient }</span>
		<button onclick={ () => setPiquoNano('forClient') }>Click</button>
	</fieldset>
</div>
