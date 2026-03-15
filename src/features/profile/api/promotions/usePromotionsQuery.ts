import { useQuery } from '@tanstack/react-query';
import { getPromotions } from '@/features/profile/api/promotions/getPromotions';

export const usePromotionsQuery = () =>  useQuery({
  queryKey: ['promotions'],
  queryFn: () => getPromotions(),
  placeholderData: previous => previous,
});
