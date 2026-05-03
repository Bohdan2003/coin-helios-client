import { useQuery } from '@tanstack/react-query';
import { getCoinOptions } from '@/features/coins/api/coinOptions/getCoinOptions';
import { coinsQueryKeys } from '@/features/coins/api/coinsQueryKeys';

export const useCoinsFiltersQuery = () => {
  return useQuery({
    queryKey: coinsQueryKeys.options(),
    queryFn: () => getCoinOptions()
  });
};