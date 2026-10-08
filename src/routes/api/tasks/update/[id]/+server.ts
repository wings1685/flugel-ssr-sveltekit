import { updateTask } from "#lib/server/db/tasks/updateTask.ts";
import type { RequestHandler } from "@sveltejs/kit";

export const PUT: RequestHandler = async ({ request, params }) => {
	const data = await request.json();
	data.id = +(params.id ?? '');
	await updateTask(data);

	return new Response(null, { status: 204 });
};
