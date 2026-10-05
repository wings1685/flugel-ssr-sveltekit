import { apiFetch } from "#lib/_global/lib/api.ts";
import { buildFindQuery } from "#lib/server/db/tasks/fetchTasks.ts";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ url }) => {
	const findQuery = buildFindQuery(url);
	const tasks = await apiFetch('/tasks', findQuery);

	return { tasks };
};
