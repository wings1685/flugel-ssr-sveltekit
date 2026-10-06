import { eq } from "drizzle-orm";
import { db } from "../index.ts";
import { taskSchema, validateSafeParse } from "#lib/_global/lib/validate.ts";
import { task, taskDetail } from "../schema.ts";
import type { TaskSchema } from "#lib/_global/lib/validate.ts";
import type { TaskDrizzleSchema, TaskDetailDrizzleSchema } from "../types.ts";

export const updateTask = async (values?: TaskSchema) => {
	if (!values) throw new Error('Task Not Found.');

	const input = {
		...values,
		id: +(values.id ?? ''),
	};
	const result = validateSafeParse(taskSchema, input);
	if (!result.success) throw new Error('Missing fields');

	const { id, title, text } = result.output;
	const taskData: Pick<TaskDrizzleSchema, 'title'> = { title };

	await db.transaction(async (tx) => {
		await tx.update(task).set(taskData).where(eq(task.id, id));

		const detail = await tx.query.taskDetail.findFirst({
			where: eq(taskDetail.task_id, id),
		});
		if (!detail) throw new Error('TaskDetail Not Found.');

		const taskDetailData: Omit<TaskDetailDrizzleSchema, 'id'> = {
			task_id: id,
			text: text,
		};

		await tx.update(taskDetail).set(taskDetailData).where(eq(taskDetail.id, detail.id));
	});

	return { success: true };
};
