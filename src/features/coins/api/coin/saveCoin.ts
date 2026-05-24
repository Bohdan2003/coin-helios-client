import { apiPostRequest } from '@/shared/api/apiClientPost';

export const saveCoin = (id: string) => apiPostRequest('user_api/auth/save_coin_change/', { coin_uuid: id });
