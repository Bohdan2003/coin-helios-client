//api
import { apiGetRequest } from '@/shared/api/apiInstance';
//types
import { ResponseWithPagination } from '@/shared/api/types';
import { TCoinChartPoint } from '@/modules/coins/api/types';
import {
  TSortDir,
  TSortKey
} from '@/modules/coins/api/types';

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
  price_chart_points: TCoinChartPoint[],
  chain: {
    name: string,
    icon: string
  },
  categories: string,
  icon: string,
  liked: boolean,
  saved: boolean
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
