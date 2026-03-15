import {
  makePostRequest,
  QueryParams
} from '@/shared/api/utils';

export const apiPostRequest = async<T>(
  path: string,
  body?: unknown,
  params?: QueryParams ,
): Promise<T> => {
  const accessToken = localStorage.getItem('access');
  const refreshToken = localStorage.getItem('refresh');

  let response = await makePostRequest({
    path,
    token: accessToken,
    params,
    body
  });

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

    response = await makePostRequest({
      path,
      token: accessToken,
      params,
      body
    });
  }

  if (!response.ok) {
    throw new Error('error');
  }

  return response.json();
};
