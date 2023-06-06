import { redirect } from '@sveltejs/kit';
import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async ({ data, url }) => {
	if (data.user && url.pathname === '/login') {
		throw redirect(307, '/');
	} else if (!data.user && url.pathname !== '/login') {
		throw redirect(307, '/login');
	}
	return { user: data.user };
};
