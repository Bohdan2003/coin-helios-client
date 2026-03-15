//hooks
import { useQuery } from '@tanstack/react-query';
import { useKeyChangeFetching } from '@/shared/api/useKeyChangeFetching';
//api
import { getMarkets } from '@/features/coins/api/coinMarkets/getMarkets';
import { coinsQueryKeys } from '@/features/coins/api/coinsQueryKeys';
//types
import { TMarketsParams } from '@/features/coins/api/coinMarkets/getMarkets';


export const useMarketsQuery = (params: TMarketsParams) => {
  const query = useQuery({
    queryKey: coinsQueryKeys.markets.list(params),
    queryFn: () => getMarkets(params),
    placeholderData: previous => previous,
    refetchInterval: 60 * 1000,
    refetchIntervalInBackground: true,
    refetchOnWindowFocus: true
  });

  const queryKeyStr = JSON.stringify(params);
  const isKeyChangeFetching = useKeyChangeFetching(query.isFetching, queryKeyStr);

  return {
    isKeyChangeFetching,
    ...query
  };
};