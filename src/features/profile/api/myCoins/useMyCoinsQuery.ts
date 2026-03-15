import { useQuery } from '@tanstack/react-query';
import { getMyCoins } from '@/features/profile/api/myCoins/getMyCoins';

export const useMyCoinsQuery = () =>  useQuery({
  queryKey: ['my-coins'],
  queryFn: () => getMyCoins(),
  placeholderData: previous => previous,
});
