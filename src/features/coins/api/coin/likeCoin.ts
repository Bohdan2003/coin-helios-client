import { apiPostRequest } from '@/shared/api/apiClientPost';

export const likeCoin = async (id: string) =>
  apiPostRequest('coin_api/auth/like_coin_change/', { coin_uuid: id });