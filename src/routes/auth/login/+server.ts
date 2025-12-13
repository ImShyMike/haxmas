import { redirect } from '@sveltejs/kit';
import { randomBytes } from 'crypto';
import { getAuthorizationUrl } from '$lib/server/oauth';
import { dev } from '$app/environment';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ cookies }) => {
	const state = randomBytes(16).toString('hex');

	cookies.set('oauth_state', state, {
		path: '/',
		maxAge: 600,
		secure: !dev,
		httpOnly: true,
		sameSite: 'lax'
	});

	const authUrl = getAuthorizationUrl(state);
	throw redirect(302, authUrl);
};
