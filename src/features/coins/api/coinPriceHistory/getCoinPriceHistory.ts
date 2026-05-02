//api
import { apiClientGet } from '@/shared/api/apiClientGet';

export type TCoinPriceHistoryPeriod = '24h' | '7d' | '1m' | '3m' | '1y' | 'max';

export type TCoinChartPoint = {
  timestamp: string,
  price: number
}

export type TCoinPriceHistory = {
  coin_id: string,
  period: TCoinPriceHistoryPeriod,
  points: TCoinChartPoint[]
}

export type TPriceHistoryPeriodParams = {
  id: string;
  period: TCoinPriceHistoryPeriod;
}


export const getCoinPriceHistory = async (params: TPriceHistoryPeriodParams ) =>
  apiClientGet<TCoinPriceHistory>(`coin_api/price_router/coin/${params.id}/price-history`, params);


