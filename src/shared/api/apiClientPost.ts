import { makePostRequest, QueryParams } from '@/shared/api/utils';
import { refreshTokens } from '@/shared/api/refreshToken';

export const apiPostRequest = async <T>(path: string, body?: unknown, params?: QueryParams): Promise<T> => {
	let accessToken = localStorage.getItem('access');

	let response = await makePostRequest({ path, token: accessToken, params, body });

	if (response.status === 401) {
		accessToken = await refreshTokens();
		response = await makePostRequest({ path, token: accessToken, params, body });
	}

	if (!response.ok) {
		throw new Error('error');
	}

	return response.json();
};
