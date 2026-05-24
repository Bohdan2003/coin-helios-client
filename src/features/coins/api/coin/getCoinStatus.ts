//utils
import { apiClientGet } from '@/shared/api/apiClientGet';

export type TCoinStatus = {
	liked: boolean;
	saved: boolean;
	likes_count: number;
};

export const getCoinStatus = async (id: string) => apiClientGet<TCoinStatus>('user_api/auth/coinstatus/', { coin_uuid: id });
