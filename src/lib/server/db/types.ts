import { task, taskDetail } from "./schema";
import type { InferSelectModel } from "drizzle-orm";

export type TaskData = InferSelectModel<typeof task>;
export type TaskDetail = InferSelectModel<typeof taskDetail>;
export type TaskItem = TaskData & Pick<TaskDetail, 'text'>;

export type CreateTaskData = Pick<TaskData, 'title'> & Pick<TaskDetail, 'text'>;
export type DeleteTaskData = Pick<TaskData, 'id'>;
