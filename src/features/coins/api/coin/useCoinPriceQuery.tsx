//hooks
import { useQuery } from '@tanstack/react-query';
//api
import { getCoinPrice } from '@/features/coins/api/coin/getCoinPrice';
import { coinsQueryKeys } from '@/features/coins/api/coinsQueryKeys';


export const useCoinPriceQuery = (id: string) =>
  useQuery({
    queryKey: coinsQueryKeys.price(id),
    queryFn: () => getCoinPrice(id),
    placeholderData: previous => previous,
    refetchInterval: 10_000
  });
