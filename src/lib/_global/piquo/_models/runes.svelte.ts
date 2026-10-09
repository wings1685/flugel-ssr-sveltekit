/* eslint-disable @typescript-eslint/no-unused-vars */
import { defineStoreValues, storeNames } from "../../stores";
import type { ExperimentStoreKeys } from "../../stores";

const values = defineStoreValues(storeNames.piquo);
export const _piquoRunes = {
	server: {
		piquoRunes: () => values.initial(),
		setPiquoRunes: (_: ExperimentStoreKeys) => {},
	},
	client: () => {
		const piquoRunes = $state(values.initial());
		const setPiquoRunes = (key: ExperimentStoreKeys) => piquoRunes[key] = values.changed();

		return { piquoRunes: () => piquoRunes, setPiquoRunes };
	},
};
