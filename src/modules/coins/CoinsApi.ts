//utils
import { apiGetRequest } from "@/utils/apiInstance";
//types
import { ResponseWithPagination } from "@/utils/types/api";

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
  icon: string,
  liked: boolean,
  saved: boolean
}


export const getCoins = async () =>
  apiGetRequest<ResponseWithPagination<TCoin[]>>('/crypto/coins');