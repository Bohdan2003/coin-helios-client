import { useMutation } from '@tanstack/react-query';
import { TCoinSchema } from '@/features/coins/model/addCoinFormValidation';
import { addCoin } from './addCoin';

export const useAddCoinMutation = () => useMutation({
  mutationFn: (data: TCoinSchema) => addCoin(data),
});
