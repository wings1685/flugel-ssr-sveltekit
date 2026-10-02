import { buildFindQuery, fetchTasks } from "#lib/server/db/tasks/fetchTasks.ts";
import type { RequestHandler } from "@sveltejs/kit";

export const GET: RequestHandler = async ({ url }) => {
	const findQuery = buildFindQuery(url);
	const tasks = await fetchTasks(findQuery);

	return Response.json(tasks);
};
