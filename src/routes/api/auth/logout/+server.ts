import { json } from '@sveltejs/kit';
import type { RequestHandler } from '@sveltejs/kit';

export const POST: RequestHandler = ({ cookies }) => {
	cookies.delete('token', { path: '/' });
	cookies.delete('refresh_token', { path: '/' });
	return json({ success: true });
};
