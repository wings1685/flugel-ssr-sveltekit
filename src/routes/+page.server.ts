import { buildFindQuery, fetchTasks } from "#lib/server/db/tasks/fetchTasks.ts";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ url }) => {
	const findQuery = buildFindQuery(url.search);
	const tasks = await fetchTasks(findQuery);

	return { tasks, findQuery };
};
