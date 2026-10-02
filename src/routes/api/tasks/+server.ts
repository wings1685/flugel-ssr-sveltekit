import { buildFindQuery, fetchTasks } from "#lib/server/db/tasks/fetchTasks.ts";
import type { PageServerLoad } from "../../$types";

export const GET: PageServerLoad = async ({ url }) => {
	const findQuery = buildFindQuery(url);
	const tasks = await fetchTasks(findQuery);

	return Response.json(tasks);
};
