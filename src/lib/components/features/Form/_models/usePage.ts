import ky from "ky";
import { BASE_URL } from "#lib/_global/lib/shared.ts";
import { defaultCreateTaskValues } from "#lib/_global/lib/validate.ts";
import type { CreateTaskSchema } from "#lib/_global/lib/validate.ts";

export const defaultCreateValues = structuredClone({ ...defaultCreateTaskValues });

export const create = async (values: CreateTaskSchema) => {
	await ky.post(`${BASE_URL}/api/tasks/create`, { json: values });

	return { success: true };
};
