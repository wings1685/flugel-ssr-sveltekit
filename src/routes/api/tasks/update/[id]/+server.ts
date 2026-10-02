import { error } from "@sveltejs/kit";
import { updateTask } from "#lib/server/db/tasks/updateTask.ts";
import { updateTaskSchema, validateSafeParse } from "#lib/_global/lib/validate.ts";
import type { RequestHandler } from "@sveltejs/kit";

export const PUT: RequestHandler = async ({ request, params }) => {
	const data = await request.json();
	const input = {
		...data,
		id: +(params.id ?? ''),
	};
	const result = validateSafeParse(updateTaskSchema, input);
	if (!result.success) return error(400, { message: 'Missing fields' });

	await updateTask(result.output);

	return Response.json({}, { status: 201 });
};
