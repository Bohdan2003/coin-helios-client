//utils
import { apiClientGet } from '@/shared/api/apiClientGet';

export type TCoinPrice = {
	current_price: number;
	min_price_24h: number;
	max_price_24h: number;
};

export const getCoinPrice = (id: string) => apiClientGet<TCoinPrice>(`coin_api/price_router/coin/${id}/price-stats`);
