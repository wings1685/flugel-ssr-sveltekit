import type { TaskData, FindData } from "#lib/server/db/types.ts";

export const defaultTask: TaskData = {
	id: 0,
	title: '',
	text: '',
	updated_at: null,
};

export const defailtFindData: FindData = {
	title: '',
	sort: 'desc',
};
