import * as v from "valibot";
import type { TaskData, CreateTaskData, DeleteTaskData } from "#lib/server/db/types.ts";

export const validateParse = <T>(schema: v.GenericSchema<T>, data: T) => {
	v.parse(schema, data);
};
export const validateSafeParse = <T>(schema: v.GenericSchema<T>, data: T) => {
	const result = v.safeParse(schema, data);
	if (result.success) return { success: true, output: result.output };

	const issues = v.flatten<typeof schema>(result.issues);

	return {
		...issues.root ?? {},
		...issues.nested ?? {},
	};
};

export const taskSchema = v.object({
	id: v.pipe(v.number()),
	title: v.pipe(v.string(), v.nonEmpty()),
	text: v.pipe(v.string(), v.nonEmpty()),
	updated_at: v.nullable(v.date()),
}) satisfies v.GenericSchema<TaskData>;
export type TaskSchema = v.InferInput<typeof taskSchema>;
export const defaultTaskValues: TaskSchema = {
	id: 0,
	title: '',
	text: '',
	updated_at: null,
};

export const findSchema = v.object({
	title: v.optional(v.string()),
	sort: v.union([ v.literal('asc'), v.literal('desc') ]),
});
export type FindSchema = v.InferInput<typeof findSchema>;
export const defaultFindValues: FindSchema = {
	title: '',
	sort: 'desc',
};


export const createTaskSchema = v.object({
	title: v.pipe(v.string(), v.nonEmpty()),
	text: v.pipe(v.string(), v.nonEmpty()),
}) satisfies v.GenericSchema<CreateTaskData>;
export type CreateTaskSchema = v.InferInput<typeof createTaskSchema>;
export const defaultCreateTaskValues: CreateTaskSchema = {
	title: '',
	text: '',
};

export const deleteTaskSchema = v.object({
	id: v.pipe(v.number()),
}) satisfies v.GenericSchema<DeleteTaskData>;
export type DeleteTaskSchema = v.InferInput<typeof deleteTaskSchema>;
export const defaultDeleteTaskValues: DeleteTaskSchema = {
	id: 0,
};
