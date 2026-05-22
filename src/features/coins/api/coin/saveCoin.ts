import { apiPostRequest } from '@/shared/api/apiClientPost';

export const saveCoin = (id: string) => apiPostRequest('coin_api/auth/save_coin_change/', { coin_uuid: id });
