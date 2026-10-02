import { db } from "../index.ts";
import { task, taskDetail } from "../schema.ts";
import type { TaskData, TaskDetail } from "../types.ts";

type CreateTaskData = Omit<TaskData, 'id' | 'updated_at'>;
type CreateTaskDetailData = Omit<TaskDetail, 'id'>;
type Values = Pick<TaskData, 'title'> & Pick<TaskDetail, 'text'>;

export const createTask = async (values: Values) => {
	const { title, text } = values;

	const taskData: CreateTaskData = { title };

	await db.transaction(async (tx) => {
		const [ insertedTask ] = await tx.insert(task).values(taskData).$returningId();

		const taskDetailData: CreateTaskDetailData = {
			task_id: insertedTask.id,
			text: text,
		};

		await tx.insert(taskDetail).values(taskDetailData);
	});

	return { success: true };
};
