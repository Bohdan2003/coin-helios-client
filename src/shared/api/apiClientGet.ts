import {
  makeGetRequest,
  makePostRequest
} from '@/shared/api/utils';

type QueryParams = Record<string, string | number | (string | number)[] | null | undefined>;

export const apiClientGet = async<T>(path: string, params?: QueryParams): Promise<T> => {
  const accessToken = localStorage.getItem('access');
  const refreshToken = localStorage.getItem('refresh');

  let response = await makeGetRequest({ path, token: accessToken, params });

  if (response.status === 401 && refreshToken) {
    const refreshResponse = await makePostRequest({
      path: '/auth_jwt/token/refresh/',
      body: { refresh: refreshToken }
    });

    if (!refreshResponse.ok) {
      //TODO: uncomment this
      // localStorage.removeItem('access');
      // localStorage.removeItem('refresh');
      throw new Error('authRequired');
    }

    response = await makeGetRequest({ path, token: accessToken, params });
  }

  if (!response.ok) {
    throw new Error('error');
  }

  return response.json();
};
