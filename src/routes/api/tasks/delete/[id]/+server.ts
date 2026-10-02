import { error } from "@sveltejs/kit";
import { deleteTask } from "#lib/server/db/tasks/deleteTask.ts";
import { deleteTaskSchema, validateSafeParse } from "#lib/_global/lib/validate.ts";
import type { RequestHandler } from "@sveltejs/kit";

export const DELETE: RequestHandler = async ({ params }) => {
	const input = {
		id: +(params.id ?? ''),
	};
	const result = validateSafeParse(deleteTaskSchema, input);
	if (!result.success) throw error(400, 'Missing fields');

	await deleteTask(result.output);

	return Response.json({}, { status: 201 });
};
