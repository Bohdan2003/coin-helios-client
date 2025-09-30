//utils
import { apiGetRequest } from '@/utils/apiInstance';
//types
import { ResponseWithPagination } from '@/utils/types/api';
import { TFilterOption } from '@/utils/types/filter';

export type TSortDir = 'asc' | 'desc' | null;
export type TSortKey = string | null;
export type TCoinPriceHistoryPeriod = '24h' | '7d' | '1m' | '3m' | '1y' | 'max';

export type TCoin = {
  id: string,
  name: string,
  symbol: string,
  market_cap: number,
  votes: number,
  percent_change_1h: number,
  percent_change_24h: number,
  percent_change_7d: number,
  price: number,
  popular_24h_filters_volume: number,
  chain: {
    name: string,
    icon: string
  },
  categories: string,
  icon: string,
  liked: boolean,
  saved: boolean
}

export type TCoinMarket = {
  exchange_name: string,
  exchange_uuid: string,
  price: string,
  volume_24h: string,
  url: string
}

export type TCoinFiltersData = {
  type: TFilterOption[],
  category: TFilterOption[],
  chain: TFilterOption[],
}

export type TCoinPriceHistoryData = {
  coin_id: string,
  period: TCoinPriceHistoryPeriod,
  points: {
    timestamp: string,
    price: number
  }[]
}

export const getCoins = async ( params: {
  page: number,
  sort_by: TSortKey,
  category_ids?: string[],
  chain_names?: string[],
  coin_type_ids?: string[],
  order?: TSortDir,
  search: string,
  filter: string,
  limit: number,
} ) =>
  apiGetRequest<ResponseWithPagination<TCoin[]>>('/crypto/coins', { params });

export const getCoinsFilters = async () =>
  apiGetRequest<{ data: TCoinFiltersData }>('/crypto/filters');

export const getCoinInfo = async ( params: {
  id: string,
} ) =>
  apiGetRequest<ResponseWithPagination<TCoin[]>>(`/crypto/coin/${params.id}/current`);

export const getCoinMarkets = async ( params: {
  id: string,
} ) =>
  apiGetRequest<{
    page: number,
    limit: number,
    total_pages: number,
    total_items: number,
    markets: TCoinMarket[];
  }>(`/crypto/coin/${params.id}/markets`);

export const getCoinPriseHistory = async ( params: {
  id: string,
  period: TCoinPriceHistoryPeriod,
} ) =>
  apiGetRequest<TCoinPriceHistoryData>(`/price_router/coin/${params.id}/price-history`, { params: { period: params.period } });


