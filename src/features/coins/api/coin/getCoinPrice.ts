//utils
import { apiClientGet } from '@/shared/api/apiClientGet';

export type TCoinPrice = {
	market_cap: number | null;
	volume_24: number | null;
	current_price: number | null;
	price_24h_ago: number | null;
	percent_change_24h: number | null;
	min_price_24h: number | null;
	max_price_24h: number | null;
	fdm: number | null;
	volume_to_mcap: number | null;
};

export const getCoinPrice = (id: string) => apiClientGet<TCoinPrice>(`coin_api/crypto/coin/${id}/info_price`);
