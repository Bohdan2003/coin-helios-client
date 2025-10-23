import { KEYS } from '@/shared/const/keys';

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


export const apiGetRequest = async<T>(path: string, options?: { params?: QueryParams } & RequestInit) => {
  const url = new URL(KEYS.API_URL + (path.startsWith('/') ? path : `/${path}`));

  let searchParams = '';
  if(options?.params) {
    searchParams = buildQueryString(options.params);
  }
 
  const response = await fetch(`${url}?${searchParams}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    ...options
  });

  return response.json() as Promise<T>;
};
