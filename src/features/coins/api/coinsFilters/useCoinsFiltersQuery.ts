import { useQuery } from '@tanstack/react-query';
import { getCoinsFilters } from '@/features/coins/api/coinsFilters/getCoinsFilters';
import { coinsQueryKeys } from '@/features/coins/api/coinsQueryKeys';

export const useCoinsFiltersQuery = () => {
  return useQuery({
    queryKey: coinsQueryKeys.filters(),
    queryFn: () => getCoinsFilters()
  });

};