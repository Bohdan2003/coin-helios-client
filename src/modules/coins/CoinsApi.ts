//utils
import { apiGetRequest } from '@/utils/apiInstance';
//types
import { ResponseWithPagination } from '@/utils/types/api';

export type TSortDir = 'asc' | 'desc'

export type TSort = {
  key: string | null;
  dir: TSortDir | null;
}

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


export const getCoins = async ( params: {
  page: number,
  sort_by: TSort['key'],
  order?: TSort['dir'],
  search: string,
  filter: string,
} ) =>
  apiGetRequest<ResponseWithPagination<TCoin[]>>('/crypto/coins', { params });