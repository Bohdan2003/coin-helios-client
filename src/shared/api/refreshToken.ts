import { makePostRequest } from './utils';

export const refreshTokens = async (): Promise<string> => {
	const refreshToken = localStorage.getItem('refresh');

	if (!refreshToken) throw new Error('authRequired');

	const response = await makePostRequest({
		path: 'user_api/auth_jwt/token/refresh/',
		body: { refresh: refreshToken },
	});

	if (!response.ok) {
		localStorage.removeItem('access');
		localStorage.removeItem('refresh');
		throw new Error('authRequired');
	}

	const { access } = await response.json() as { access: string };
	localStorage.setItem('access', access);
	return access;
};
