import { useQuery } from '@tanstack/react-query';
import { getPromotions } from '@/features/profile/api/promotions/getPromotions';
import { profileQueryKeys } from '@/features/profile/api/profileQueryKeys';

export const usePromotionsQuery = () =>  useQuery({
  queryKey: profileQueryKeys.promotions(),
  queryFn: () => getPromotions(),
  placeholderData: previous => previous,
});
