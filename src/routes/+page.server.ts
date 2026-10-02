import ky from "ky";
import { BASE_URL } from "#lib/_global/lib/shared.ts";
import { buildFindQuery } from "#lib/server/db/tasks/fetchTasks.ts";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ url }) => {
	const findQuery = buildFindQuery(url);
	const query = new URLSearchParams(findQuery).toString();
	const tasks = await ky.get(`${BASE_URL}/api/tasks?${query}`).json();

	return { tasks };
};
