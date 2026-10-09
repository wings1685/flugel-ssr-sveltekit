import { setRawRunes } from "#lib/_global/stores/raw.svelte.ts";
import { piquoStore } from "#lib/_global/piquo/index.ts";
import { setRawNano } from "#lib/_global/stores/nano.ts";
import type { RequestHandler } from "@sveltejs/kit";
import type { StoreName } from "#lib/_global/stores/index.ts";

export const PUT: RequestHandler = async ({ request }) => {
	const data = await request.json();
	const key = data.key as StoreName;
	if (key === 'raw') {
		setRawRunes('forServer');
	} else if (key === 'piquo') {
		const { setPiquoRunes } = piquoStore('piquoRunes');
		setPiquoRunes('forServer');
	} else if (key === 'rawNano') {
		setRawNano('forServer');
	} else if (key === 'piquoNano') {
		const { setPiquoNano } = piquoStore('piquoNano');
		setPiquoNano('forServer');
	}

	return new Response(null, { status: 204 });
};
