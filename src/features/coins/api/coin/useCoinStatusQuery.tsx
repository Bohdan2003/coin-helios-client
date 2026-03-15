//hooks
import { useQuery } from '@tanstack/react-query';
//api
import { getCoinStatus } from '@/features/coins/api/coin/getCoinStatus';
import { coinsQueryKeys } from '@/features/coins/api/coinsQueryKeys';


export const useCoinStatusQuery = (id: string) => useQuery({
  queryKey: coinsQueryKeys.status(id),
  queryFn: () => getCoinStatus(id),
  placeholderData: previous => previous,
});