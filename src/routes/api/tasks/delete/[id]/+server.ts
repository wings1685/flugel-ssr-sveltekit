import { deleteTask } from "#lib/server/db/tasks/deleteTask.ts";
import type { RequestHandler } from "@sveltejs/kit";

export const DELETE: RequestHandler = async ({ params }) => {
	const data = { id: +(params.id ?? '') };
	await deleteTask(data);

	return Response.json({}, { status: 201 });
};
