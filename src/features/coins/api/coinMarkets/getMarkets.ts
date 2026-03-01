//api
import { apiGetRequest } from '@/shared/api/apiInstance';
//types
import { ResponseWithPagination } from '@/shared/api/types';

export type TMarket = {
  exchange_name: string,
  exchange_uuid: string,
  price: string,
  volume_24h: string,
  url: string
}

export const getMarkets = async (params: {
  id: string,
} ) =>
  apiGetRequest<ResponseWithPagination<TMarket[]>>(`/crypto/coin/${params.id}/markets`);