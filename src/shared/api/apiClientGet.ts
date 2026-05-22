import { makeGetRequest, QueryParams } from '@/shared/api/utils';
import { refreshTokens } from '@/shared/api/refreshToken';

export const apiClientGet = async <T>(path: string, params?: QueryParams): Promise<T> => {
	let accessToken = localStorage.getItem('access');

	let response = await makeGetRequest({ path, token: accessToken, params });

	if (response.status === 401) {
		accessToken = await refreshTokens();
		response = await makeGetRequest({ path, token: accessToken, params });
	}

	if (!response.ok) {
		throw new Error('error');
	}

	return response.json();
};
