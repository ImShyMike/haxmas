import type { Handle } from '@sveltejs/kit';
import { getSessionUser } from '$lib/server/session';

export const handle: Handle = async ({ event, resolve }) => {
	const sessionId = event.cookies.get('session_id');

	if (sessionId) {
		const user = await getSessionUser(sessionId);
		if (user) {
			event.locals.user = user;
			event.locals.sessionId = sessionId;
		} else {
			event.cookies.delete('session_id', { path: '/' });
		}
	}

	return resolve(event);
};
