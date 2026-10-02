import { defailtFindData } from "#lib/_global/lib/defaultValues.ts";
import { fetchTasks } from "#lib/server/db/tasks/fetchTasks.ts";
import type { PageServerLoad } from "./$types";

type FetchTasksParameters = Parameters<typeof fetchTasks>;

export const load: PageServerLoad = async ({ url }) => {
	const params = url.searchParams;
	const findQuery = {
		title: params.get('title') ?? defailtFindData.title,
		sort: params.get('sort') ?? defailtFindData.sort,
	} as FetchTasksParameters[0];

	const tasks = await fetchTasks(findQuery);

	return { tasks };
};
