import { apiClientGet } from '@/shared/api/apiClientGet';

export type TCoinOptionsResponse = {
  data: {
    categories: string[];
    chains: string[];
    network_types: string[];
  };
};

export const getCoinOptions = async () => {
  return apiClientGet<TCoinOptionsResponse>(
    'coin_api/crypto/application/meta'
  );
};