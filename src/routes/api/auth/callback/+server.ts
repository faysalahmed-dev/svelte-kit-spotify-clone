import { redirect, type RequestHandler, error } from '@sveltejs/kit';
import { SPOTIFY_SECRET_ID, SPOTIFY_CLIENT_ID, BASE_URL } from '$env/static/private';

export const GET: RequestHandler = async ({ url, cookies }) => {
	const code = url.searchParams.get('code') || null;
	const state = url.searchParams.get('state') || null;
	const err = url.searchParams.get('error') || null;
	const storedState = cookies.get('spotify_state');
	const storedCodeVerifier = cookies.get('spotify_code_verifier');
	if (state === null || storedState === null || state !== storedState) {
		throw error(400, 'state mismatch');
	}
	if (err !== null || !code) {
		throw error(401, 'unauthenticated');
	}
	const res = await fetch('https://accounts.spotify.com/api/token', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
			Authorization: `Basic ${Buffer.from(SPOTIFY_CLIENT_ID + ':' + SPOTIFY_SECRET_ID).toString(
				'base64'
			)}`
		},
		body: new URLSearchParams({
			code: code || '',
			redirect_uri: `${BASE_URL}/api/auth/callback`,
			grant_type: 'authorization_code',
			client_id: SPOTIFY_CLIENT_ID,
			code_verifier: storedCodeVerifier || ''
		})
	});
	const result = await res.json();
	console.log(result);
	if (result.error) {
		throw error(403, 'unable to login');
	}
	cookies.delete('spotify_state');
	cookies.delete('spotify_code_verifier');
	cookies.set('token', result.access_token, { path: '/' });
	cookies.set('refresh_token', result.refresh_token, { path: '/' });

	throw redirect(303, '/');
};
