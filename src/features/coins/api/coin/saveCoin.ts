import { apiPostRequest } from '@/shared/api/apiClientPost';

export const saveCoin = async (id: string) =>
  apiPostRequest('coin_api/auth/save_coin_change/', { coin_uuid: id });