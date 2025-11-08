import { apiGetRequest } from '@/shared/api/apiInstance';

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
  apiGetRequest<{ data: TCoinFilters }>('/crypto/filters');