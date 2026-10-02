import type { TaskItem } from "#lib/server/db/types.ts";

export type PageProps = {
	data: {
		tasks: TaskItem[];
	};
};
