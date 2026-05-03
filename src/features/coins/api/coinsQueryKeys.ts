import { TMarketsParams } from '@/features/coins/api/coinMarkets/getMarkets';
import { TPriceHistoryPeriodParams } from '@/features/coins/api/coinPriceHistory/getCoinPriceHistory';
import { TCoinsListQueryParams } from '@/features/coins/api/coinsList/useCoinsListQuery';

export const coinsQueryKeys = {
  all: ['coins'] as const,

  lists: () => [...coinsQueryKeys.all, 'list'] as const,
  list: (params: TCoinsListQueryParams) =>
    [...coinsQueryKeys.lists(), params] as const,

  filters: () => [...coinsQueryKeys.all, 'filters'] as const,

  status: (id: string) =>
    [...coinsQueryKeys.all, 'status', id] as const,

  options: () => [...coinsQueryKeys.all, 'options'],

  markets: {
    all: () => [...coinsQueryKeys.all, 'markets'] as const,
    list: (params: TMarketsParams) =>
      [...coinsQueryKeys.markets.all(), params] as const,
  },

  priceHistory: {
    all: () => [...coinsQueryKeys.all, 'priceHistory'] as const,
    list: (params: TPriceHistoryPeriodParams) =>
      [...coinsQueryKeys.priceHistory.all(), params] as const,
  },
};