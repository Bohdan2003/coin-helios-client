//api
import { apiGetRequest } from '@/shared/api/apiInstance';

export type TCoinInfoParams = {
  id: string;
}

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

export const getCoinInfo = async ( params: TCoinInfoParams ) =>
  apiGetRequest<TCoinInfo>(`/crypto/coin/${params.id}/current`);