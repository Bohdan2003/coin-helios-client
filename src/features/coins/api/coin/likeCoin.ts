import { apiPostRequest } from '@/shared/api/apiClientPost';

export const likeCoin = (id: string) => apiPostRequest('coin_api/auth/like_coin_change/', { coin_uuid: id });
