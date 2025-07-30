export const apiUrl =  process.env.NEXT_PUBLIC_API_URL;

type QueryParams = Record<string, string | number | null | undefined>

const buildQueryString = (params: QueryParams) => {
  const query = new URLSearchParams();
  for (const [key, value] of Object.entries(params)) {
    if (value !== null && value !== undefined && value !== '') {
      query.append(key, String(value));
    }
  }
  return query.toString();
};

export const apiGetRequest = async<T>(path: string, options?: { params?: QueryParams } & RequestInit) => {
  const url = new URL(apiUrl + (path.startsWith('/') ? path : `/${path}`));

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
