//utils
import { apiClientGet } from '@/shared/api/apiClientGet';

export type TCoinStatus = {
  liked: boolean,
  saved: boolean,
  votes: number
}

export const getCoinStatus = async (id: string) =>
  apiClientGet<TCoinStatus>('/auth/coinstatus/', { coin_uuid: id });