//utils
import { apiGetRequest } from '@/shared/api';
//types
import { ResponseWithPagination } from '@/shared/types/api';
import {
  TCoin,
  TCoinFilters,
  TCoinMarket,
  TCoinPriceHistory,
  TCoinPriceHistoryPeriod,
  TSortDir,
  TSortKey
} from '@/features/coins/types';

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
  apiGetRequest<{ data: TCoinFilters }>('/crypto/filters');

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
  apiGetRequest<TCoinPriceHistory>(`/price_router/coin/${params.id}/price-history`, { params: { period: params.period } });


