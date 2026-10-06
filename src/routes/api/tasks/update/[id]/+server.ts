import { error } from "@sveltejs/kit";
import { updateTask } from "#lib/server/db/tasks/updateTask.ts";
import { taskSchema, validateSafeParse } from "#lib/_global/lib/validate.ts";
import type { RequestHandler } from "@sveltejs/kit";

export const PUT: RequestHandler = async ({ request, params }) => {
	const data = await request.json();
	const input = {
		...data,
		id: +(params.id ?? ''),
	};
	const result = validateSafeParse(taskSchema, input);
	if (!result.success) throw error(400, 'Missing fields');

	await updateTask(result.output);

	return Response.json({}, { status: 201 });
};
