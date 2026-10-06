import { db } from "../index.ts";
import { task, taskDetail } from "../schema.ts";
import { createTaskSchema, validateSafeParse } from "#lib/_global/lib/validate.ts";
import type { CreateTaskSchema } from "#lib/_global/lib/validate.ts";
import type { TaskDetailDrizzleSchema } from "../types.ts";

export const createTask = async (values: CreateTaskSchema) => {
	const result = validateSafeParse(createTaskSchema, values);
	if (!result.success) throw new Error('Missing fields');

	const { title, text } = result.output;

	const taskData: Pick<CreateTaskSchema, 'title'> = { title };

	await db.transaction(async (tx) => {
		const [ insertedTask ] = await tx.insert(task).values(taskData).$returningId();

		const taskDetailData: Omit<TaskDetailDrizzleSchema, 'id'> = {
			task_id: insertedTask.id,
			text: text,
		};

		await tx.insert(taskDetail).values(taskDetailData);
	});

	return { success: true };
};
