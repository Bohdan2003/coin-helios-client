//api
import { apiClientGet } from '@/shared/api/apiClientGet';

export type TPromotion = {
  id: string,
  type: string,
  icon: string,
  name: string,
  symbol: string,
  start: Date,
  finish: Date,
  link_usage: number,
  status: string,
}

export const getPromotions = async () =>
  apiClientGet<TPromotion[]>('/api/promotions/');