import { useQuery } from '@tanstack/react-query';
import { getMyCoins } from '@/features/profile/api/myCoins/getMyCoins';
import { profileQueryKeys } from '@/features/profile/api/profileQueryKeys';

export const useMyCoinsQuery = () =>  useQuery({
  queryKey: profileQueryKeys.myCoins(),
  queryFn: () => getMyCoins(),
  placeholderData: previous => previous,
});
