import { _piquoRunes } from "./runes.svelte";
import { _piquoNano } from "./nano.svelte";

export const allStores = {
	piquoRunes: _piquoRunes,
	piquoNano: _piquoNano,
} as const;
export type AllStores = typeof allStores;
export type AllStoreKeys = keyof AllStores;
