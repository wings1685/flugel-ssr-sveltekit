import { error } from "@sveltejs/kit";
import { createTask } from "#lib/server/db/tasks/createTask.ts";
import { createTaskSchema, validateSafeParse } from "#lib/_global/lib/validate.ts";
import type { RequestHandler } from "@sveltejs/kit";

export const POST: RequestHandler = async ({ request }) => {
	const data = await request.json();
	const result = validateSafeParse(createTaskSchema, data);
	if (!result.success) throw error(400, 'Missing fields');

	await createTask(result.output);

	return Response.json({}, { status: 201 });
};
