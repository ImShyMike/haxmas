import { randomBytes } from 'crypto';
import { db, type User, type Session } from './db';

const SESSION_DURATION_DAYS = 30;

export async function createSession(userId: number): Promise<string> {
	const sessionId = randomBytes(32).toString('hex');
	const expiresAt = new Date(Date.now() + SESSION_DURATION_DAYS * 24 * 60 * 60 * 1000);

	await db<Session>('sessions').insert({
		id: sessionId,
		user_id: userId,
		expires_at: expiresAt
	});

	return sessionId;
}

export async function getSessionUser(sessionId: string): Promise<User | null> {
	const session = await db<Session>('sessions')
		.where('id', sessionId)
		.where('expires_at', '>', new Date())
		.first();

	if (!session) {
		return null;
	}

	const user = await db<User>('users').where('id', session.user_id).first();
	return user ?? null;
}

export async function deleteSession(sessionId: string): Promise<void> {
	await db<Session>('sessions').where('id', sessionId).del();
}

export async function cleanupExpiredSessions(): Promise<void> {
	await db<Session>('sessions').where('expires_at', '<', new Date()).del();
}
