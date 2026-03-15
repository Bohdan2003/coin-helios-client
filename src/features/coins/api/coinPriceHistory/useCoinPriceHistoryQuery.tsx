'use client';
import { useQuery } from '@tanstack/react-query';
import {
  getCoinPriceHistory,
  TPriceHistoryPeriodParams
} from '@/features/coins/api/coinPriceHistory/getCoinPriceHistory';
import { coinsQueryKeys } from '@/features/coins/api/coinsQueryKeys';

export const usePriceHistoryPeriodQuery = (params: TPriceHistoryPeriodParams) => useQuery({
  queryKey: coinsQueryKeys.priceHistory.list(params),
  queryFn: () => getCoinPriceHistory(params),
  placeholderData: previous => previous,
  // refetchInterval: 60 * 1000,
  // refetchIntervalInBackground: true,
  // refetchOnWindowFocus: true
});