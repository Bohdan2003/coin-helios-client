import { KEYS } from '@/shared/config/keys';

export type QueryParams = Record<string, string | number | (string | number)[] | null | undefined>;

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

export const getUrl = (path: string) => new URL(KEYS.BASE_URL + (path.startsWith('/') ? path : `/${path}`));

type TGetRequestParams = {
  path: string;
  token?: string | null;
  params?: QueryParams
};

export const makeGetRequest = async ({
  path,
  token,
  params,
}:TGetRequestParams ) => {
  const url = getUrl(path);
  let queryParams = '';
  if(params) queryParams = '?' + buildQueryString(params);

  return await fetch(`${url}${queryParams}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      ...(token && { 'Authorization': `Bearer ${token}` })
    },
  });
};

type TPostRequestParams = TGetRequestParams & {
  body?: unknown;
};

export const makePostRequest = async ({
  path,
  token,
  params,
  body,
}: TPostRequestParams) => {
  const url = getUrl(path);

  let queryParams = '';
  if (params) queryParams = '?' + buildQueryString(params);

  return await fetch(`${url}${queryParams}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...(token && { Authorization: `Bearer ${token}` }),
    },
    body: JSON.stringify(body)
  });
};