//api
import { apiClientGet } from '@/shared/api/apiClientGet';

export type TMyCoin= {
  id: string,
  name: string,
  symbol: string,
  likes: number,
  promotion: string,
  start: Date,
  finish: Date,
  icon: string,
  views_all: number,
  views_7d: number,
}

export const getMyCoins = async () =>
  apiClientGet<TMyCoin[]>('user_api/api/userpanel/my-coins/');