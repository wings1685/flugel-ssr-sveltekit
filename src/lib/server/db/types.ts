import { task, taskDetails } from "./schema";
import type { InferSelectModel } from "drizzle-orm";

export type Task = InferSelectModel<typeof task>;
export type TaskDetail = InferSelectModel<typeof taskDetails>;
export type TaskData = Task & Pick<TaskDetail, 'text'>;

export type PageProps = {
	data: {
		tasks: TaskData[];
	};
};

export type FindData = {
	title: string;
	sort: 'asc' | 'desc';
};
