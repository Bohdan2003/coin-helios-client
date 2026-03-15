import { apiPostRequest } from '@/shared/api/apiClientPost';

export const likeCoin = async (id: string) =>
  apiPostRequest('/auth/like_coin_change/', { coin_uuid: id });