import { useQuery } from '@tanstack/react-query';
import { getCoinsFilters } from '@/features/coins/api/coinsFilters/getCoinsFilters';
import { coinsQueryKeys } from '@/features/coins/api/coinsQueryKeys';

export const useCoinOptionsQuery = () => {
  return useQuery({
    queryKey: coinsQueryKeys.filters(),
    queryFn: () => getCoinsFilters()
  });
};