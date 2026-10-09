/* eslint-disable @typescript-eslint/no-unused-vars */
import { map } from "nanostores";
import { defineStoreValues, storeNames } from "../../stores";
import type { ExperimentStoreKeys } from "../../stores";

const values = defineStoreValues(storeNames.piquoNano);
const serverStore = <T>(createInitialValues: () => T) => ({
	get value() { return createInitialValues() },
	set: (newValue: T) => {},
	setKey: () => {},
	eq: (oldValue: T, newValue: T) => false,
	get: () =>  createInitialValues(),
	get init() { return createInitialValues() },
	get lc() { return createInitialValues() },
	listen: (listener: (value: T, oldValue: T) => void) => () => {},
	notify: (oldValue?: T) => {},
	off: () => {},
	subscribe: (listener: (value: T, oldValue?: T) => void) => () => {},
});
export const _piquoNano = {
	server: { piquoNano: serverStore(values.initial), setPiquoNano: (_: ExperimentStoreKeys) => {} },
	client: () => {
		const piquoNano = map(values.initial());
		const setPiquoNano = (key: ExperimentStoreKeys) => piquoNano.setKey(key, values.changed());

		return { piquoNano, setPiquoNano }
	},
};
