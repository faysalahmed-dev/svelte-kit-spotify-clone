import type { LayoutServerLoad } from './$types';
import { SPOTIFY_API_BASE_URL } from '$env/static/private';
import { redirect } from '@sveltejs/kit';

const userData = {
	country: 'BD',
	birthdate: 'kddfd',
	display_name: 'Faysal',
	email: 'fahadfaysal146@gmail.com',
	explicit_content: {
		filter_enabled: false,
		filter_locked: false
	},
	external_urls: {
		spotify: 'https://open.spotify.com/user/1bxu6pa7xh37fcd52fq5q736l'
	},
	followers: { href: null, total: 0 },
	href: 'https://api.spotify.com/v1/users/1bxu6pa7xh37fcd52fq5q736l',
	id: '1bxu6pa7xh37fcd52fq5q736l',
	filter_locked: false,
	images: [],
	product: 'free',
	type: 'user',
	uri: 'spotify:user:1bxu6pa7xh37fcd52fq5q736l'
} as SpotifyApi.CurrentUsersProfileResponse;

export const load: LayoutServerLoad = async ({ cookies, url, fetch }) => {
	const token = cookies.get('token');
	const refreshToken = cookies.get('refresh_token');
	if (!token) return { user: null };
	try {
		const userRes = await fetch(`${SPOTIFY_API_BASE_URL}/me`, {
			headers: {
				Authorization: `Bearer ${token}`
			}
		});
		const user = await userRes.json();
		console.log('user: ', user);
		if (userRes.status === 401 && refreshToken) {
			const refreshTokenRes = await fetch('/api/auth/refresh-token');
			await refreshTokenRes.json();
			throw redirect(307, url.pathname);
		}
		return { user };
	} catch (err: any) {
		return { user: null };
	}
};
