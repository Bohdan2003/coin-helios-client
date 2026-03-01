//hooks
import { useQuery } from '@tanstack/react-query';
import { useKeyChangeFetching } from '@/shared/api/useKeyChangeFetching';
//api
import { getMarkets } from '@/features/coins/api/coinMarkets/getMarkets';
//types
import type { TSortDir, TSortKey } from '@/features/coins/api/types';

type TMarketsParams = {
  id: string;
  page: number;
  sortKey: TSortKey;
  sortDir: TSortDir;
}

export const useMarketsQuery = (params: TMarketsParams) => {
  const query = useQuery({
    queryKey: ['markets', params],
    queryFn: () => getMarkets({ id: params.id }),
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