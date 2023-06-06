import type { RequestHandler } from './$types';
import { SPOTIFY_CLIENT_ID, SPOTIFY_SECRET_ID } from '$env/static/private';
import { error, json } from '@sveltejs/kit';

interface APIRes {
	access_token: string;
	refresh_token: string;
}

export const GET: RequestHandler = async (evt) => {
	const refresh_token = evt.url.searchParams.get('refresh_token');
	if (!refresh_token) throw error(400, 'refresh token not found');
	try {
		const res = await fetch('https://accounts.spotify.com/api/token', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
				Authorization:
					'Basic ' + Buffer.from(SPOTIFY_CLIENT_ID + ':' + SPOTIFY_SECRET_ID).toString('base64')
			},
			body: new URLSearchParams({
				grant_type: 'refresh_token',
				refresh_token: refresh_token || ''
			})
		});
		const result = await res.json();
		if (result.error) {
			evt.cookies.delete('refresh_token', { path: '/' });
			evt.cookies.delete('token', { path: '/' });
			throw error(401, result.error_description);
		}
		evt.cookies.set('token', result.access_token, { path: '/' });
		evt.cookies.set('refresh_token', result.refresh_token, { path: '/' });
		return json({ token: result.access_token, refresh_token: result.refresh_token });
	} catch (err: any) {
		throw error(401, err.message);
	}
};
