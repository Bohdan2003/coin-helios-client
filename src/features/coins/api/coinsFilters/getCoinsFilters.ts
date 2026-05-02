import { apiClientGet } from '@/shared/api/apiClientGet';

export type TFilterOption = {
  id: string,
  name: string,
}

export type TCoinFilters = {
  type: TFilterOption[],
  category: TFilterOption[],
  chain: TFilterOption[],
}

export const getCoinsFilters = async () =>
  apiClientGet<{ data: TCoinFilters }>('coin_api/crypto/filters');