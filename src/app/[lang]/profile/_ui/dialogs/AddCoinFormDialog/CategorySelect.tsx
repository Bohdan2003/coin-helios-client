import { FormSelect } from '@/shared/ui/fields/FormSelect';
import { useCoinsFiltersQuery } from '@/features/coins/api/coinsFilters/useCoinsFiltersQuery';

type TCategorySelectProps = {
  name: string;
  label: string;
  placeholder: string;
};

export const CategorySelect: React.FC<TCategorySelectProps> = ( props) => {
  const { data, isLoading, isError } = useCoinsFiltersQuery();

  return (
    <FormSelect
      isLoading={isLoading}
      isError={isError}
      options={data?.data.categories}
      fullWidth
      required
      {...props}
    />
  );
};