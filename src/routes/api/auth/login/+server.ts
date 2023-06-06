import { redirect } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { SPOTIFY_CLIENT_ID, BASE_URL } from '$env/static/private';
import pkceChallenge from 'pkce-challenge';

function makeid(length: number) {
	let result = '';
	const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	const charactersLength = characters.length;
	let counter = 0;
	while (counter < length) {
		result += characters.charAt(Math.floor(Math.random() * charactersLength));
		counter += 1;
	}
	return result;
}
export const GET: RequestHandler = async ({ cookies }) => {
	const state = makeid(16);
	const challenge = await pkceChallenge();

	cookies.set('spotify_state', state);
	cookies.set('spotify_code_verifier', challenge.code_verifier);
	throw redirect(
		307,
		`https://accounts.spotify.com/authorize?${new URLSearchParams({
			response_type: 'code',
			client_id: SPOTIFY_CLIENT_ID,
			scope: 'user-read-private user-read-email',
			redirect_uri: `${BASE_URL}/api/auth/callback`,
			state,
			code_challenge_method: 'S256',
			code_challenge: challenge.code_challenge
		})}`
	);
};
