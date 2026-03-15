//api
import { apiServerGet } from '@/shared/api/apiServerGet';

export type TCoinInfo = {
  id: string;
  name: string;
  symbol: string;
  icon: string;
  descriptions: {
    title: string;
    text: string;
  }[]
  contracts: {
    network: string;
    address: string;
  }[]
  community: {
    telegram?: string,
    discord?: string,
    reddit?: string,
    twitter?: string,
    telegram_contact?: string,
    website?: string,
    other_links?: string,
    email_for_communication?: string
  }
}

export type TCoinInfoParams = {
  id: string;
}

export const getCoin = async (params: TCoinInfoParams ) =>
  apiServerGet<TCoinInfo>(`/crypto/coin/${params.id}/current`);