import { makeGetRequest } from '@/shared/api/utils';

export const apiServerGet = async<T>(path: string): Promise<T> => {
  const response = await makeGetRequest({ path });

  return response.json();
};