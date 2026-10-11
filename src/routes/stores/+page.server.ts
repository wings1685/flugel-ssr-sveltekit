import { piquoStore } from "#lib/_global/piquo/index.ts";
import { rawRunes } from "#lib/_global/stores/raw.svelte.ts";
import { rawNano } from "#lib/_global/stores/nano.ts";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
	const { piquoRunes } = piquoStore('piquoRunes');
	const { piquoNano } = piquoStore('piquoNano');

	return {
		rawRunesServer: rawRunes.forServer, piquoRunesServer: piquoRunes().forServer,
		rawNanoServer: rawNano.get().forServer, piquoNanoServer: piquoNano().get().forServer,
	};
};
