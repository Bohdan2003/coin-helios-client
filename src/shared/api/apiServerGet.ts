import { makeGetRequest } from '@/shared/api/utils';

export const apiServerGet = async<T>(path: string): Promise<T> => {
  //TODO
  // const response = await makeGetRequest({ path });

  const response =  await fetch(`http://31.42.188.124:8010${path}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });


  if (!response.ok) {
    throw new Error('error');
  }

  return response.json();
};