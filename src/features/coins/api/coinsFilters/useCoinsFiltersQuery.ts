//hooks
import { useQuery } from '@tanstack/react-query';
//api
import { getCoinsFilters } from '@/features/coins/api/coinsFilters/getCoinsFilters';

export const useCoinsFiltersQuery = () => {
  return useQuery({
    queryKey: [ 'coinsFilters' ],
    queryFn: () => getCoinsFilters()
  });

};