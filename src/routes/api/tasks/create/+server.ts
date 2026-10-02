import { fail } from "@sveltejs/kit";
import { createTask } from "#lib/server/db/tasks/createTask.ts";
import { createTaskSchema, validateSafeParse } from "#lib/_global/lib/validate.ts";
import type { PageServerLoad } from "../../../$types";

export const POST: PageServerLoad = async ({ request }) => {
	const data = await request.json();
	const result = validateSafeParse(createTaskSchema, data);
	if (!result.success) return fail(400, { message: 'Missing fields' });

	await createTask(result.output);

	return Response.json({}, { status: 201 });
};
