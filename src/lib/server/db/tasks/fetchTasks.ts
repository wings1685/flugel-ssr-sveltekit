import { eq, like, asc, desc } from "drizzle-orm";
import { db } from "#lib/server/db/index.ts";
import { task, taskDetails } from "#lib/server/db/schema.ts";
import type { FindData } from "#lib/server/db/types.ts";

export const fetchTasks = async (findQuery: FindData) => {
	const query = db
		.select({
			id: task.id,
			title: task.title,
			updated_at: task.updated_at,
			text: taskDetails.text,
		})
		.from(task)
		.innerJoin(taskDetails, eq(task.id, taskDetails.task_id));

	if (findQuery.title) query.where(like(task.title, `%${findQuery.title}%`));

	if (findQuery.sort === 'asc') {
		query.orderBy(asc(task.updated_at));
	} else {
		query.orderBy(desc(task.updated_at));
	}

	return query;
};
