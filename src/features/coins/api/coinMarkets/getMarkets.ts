//api
import { apiClientGet } from '@/shared/api/apiClientGet';
//types
import { ResponseWithPagination } from '@/shared/api/types';
import type { TSortDir, TSortKey } from '@/features/coins/api/types';

export type TMarketsParams = {
  id: string;
  page: number;
  sortKey: TSortKey;
  sortDir: TSortDir;
}

export type TMarket = {
  exchange_name: string,
  exchange_uuid: string,
  price: string,
  volume_24h: string,
  url: string
}

export const getMarkets = async (params: TMarketsParams ) =>
  apiClientGet<ResponseWithPagination<TMarket[]>>(`coin_api/crypto/coin/${params.id}/markets`, params);