import { createTask } from "#lib/server/db/tasks/createTask.ts";
import type { RequestHandler } from "@sveltejs/kit";

export const POST: RequestHandler = async ({ request }) => {
	const data = await request.json();
	await createTask(data);

	return Response.json({}, { status: 201 });
};
