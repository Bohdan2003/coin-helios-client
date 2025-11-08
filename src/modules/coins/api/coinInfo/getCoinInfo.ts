//api
import { apiGetRequest } from '@/shared/api/apiInstance';
//types
import { ResponseWithPagination } from '@/shared/api/types';

export type TCoinInfoParams = {
  id: string;
  language: string;
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
  apiGetRequest<ResponseWithPagination<TCoinInfo>>(`/crypto/coin/${params.id}/current`);