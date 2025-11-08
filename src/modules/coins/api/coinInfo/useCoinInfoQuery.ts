//hooks
import { useQuery } from '@tanstack/react-query';
//api
import { getCoinInfo } from '@/modules/coins/api/coinInfo/getCoinInfo';
//types
import { TCoinInfoParams } from '@/modules/coins/api/coinInfo/getCoinInfo';

export const useCoinInfoQuery = (params: TCoinInfoParams) => {
  const query = useQuery({
    queryKey: [ 'coin', 'info', params ],
    queryFn: () => getCoinInfo({
      id: params.id,
      language: params.language,
    }),
  });

  return {
    ...query
  };
};