import { KEYS } from '@/shared/config/keys';

type QueryParams = Record<string, string | number | (string | number)[] | null | undefined>;

const buildQueryString = (params: QueryParams) => {
  const query = new URLSearchParams();

  for (const [key, value] of Object.entries(params)) {
    if (value === null || value === undefined || value === '') continue;

    if (Array.isArray(value)) {
      for (const v of value) {
        if (v !== null && v !== undefined && v !== '') {
          query.append(key, String(v));
        }
      }
    } else {
      query.append(key, String(value));
    }
  }

  return query.toString();
};


export const apiGetRequest = async<T>(path: string, options?: { params?: QueryParams } & RequestInit): Promise<T> => {
  const url = new URL(KEYS.API_URL + (path.startsWith('/') ? path : `/${path}`));

  let searchParams = '';
  if(options?.params) {
    searchParams = buildQueryString(options.params);
  }

  const makeRequest = async () => await fetch(`${url}?${searchParams}`, {
    method: 'GET',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    ...options
  });

  let response = await makeRequest();

  if (response.status === 401) {
    const refreshResponse = await fetch(
      `${KEYS.API_URL}/auth_jwt/token/refresh/`,
      {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    if (!refreshResponse.ok) {
      throw new Error('Session expired');
    }

    response = await makeRequest();
  }

  return response.json();
};
