import { apiPostRequest } from '@/shared/api/apiClientPost';

export const saveCoin = async (id: string) =>
  apiPostRequest('/auth/save_coin_change/', { coin_uuid: id });