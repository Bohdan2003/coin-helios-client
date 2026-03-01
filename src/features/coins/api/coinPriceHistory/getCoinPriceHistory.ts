//api
import { apiGetRequest } from '@/shared/api/apiInstance';
//types
import { TCoinChartPoint } from '@/features/coins/api/types';

export type TCoinPriceHistoryPeriod = '24h' | '7d' | '1m' | '3m' | '1y' | 'max';

export type TCoinPriceHistory = {
  coin_id: string,
  period: TCoinPriceHistoryPeriod,
  points: TCoinChartPoint[]
}

export const getCoinPriceHistory = async (params: {
  id: string,
  period: TCoinPriceHistoryPeriod,
} ) =>
  apiGetRequest<TCoinPriceHistory>(`/price_router/coin/${params.id}/price-history`, { params: { period: params.period } });


