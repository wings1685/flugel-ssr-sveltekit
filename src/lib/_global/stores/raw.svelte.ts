import { defineStoreValues, storeNames } from "./";
import type { ExperimentStoreKeys } from "./";

const values = defineStoreValues(storeNames.raw);
export const rawRunes = $state(values.initial());
export const setRawRunes = (key: ExperimentStoreKeys) => rawRunes[key] = values.changed();
