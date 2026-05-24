'use client';
import { useQuery } from '@tanstack/react-query';
import {
  getCoinPriceHistory,
  TPriceHistoryPeriodParams
} from '@/features/coins/api/coinPriceHistory/getCoinPriceHistory';
import { useKeyChangeFetching } from '@/shared/api/useKeyChangeFetching';
import { coinsQueryKeys } from '@/features/coins/api/coinsQueryKeys';

export const usePriceHistoryPeriodQuery = (params: TPriceHistoryPeriodParams) => {
  const query = useQuery({
    queryKey: coinsQueryKeys.priceHistory.list(params),
    queryFn: () => getCoinPriceHistory(params),
    placeholderData: previous => previous,
    refetchInterval: 60 * 1000,
    refetchIntervalInBackground: true,
    refetchOnWindowFocus: true
  });

  //key change fetching
  const queryKeyStr = JSON.stringify(params);
  const isKeyChangeFetching = useKeyChangeFetching(query.isFetching, queryKeyStr);

  return {
    isKeyChangeFetching,
    ...query
  };
}