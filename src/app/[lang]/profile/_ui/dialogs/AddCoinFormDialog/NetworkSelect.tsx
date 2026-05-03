import { FormSelect } from '@/shared/ui/fields/FormSelect';
import { useCoinsFiltersQuery } from '@/features/coins/api/coinsFilters/useCoinsFiltersQuery';

type TNetworkSelectProps = {
  name: string;
  placeholder: string;
};

export const NetworkSelect: React.FC<TNetworkSelectProps> = ( props) => {
  const { data, isLoading, isError } = useCoinsFiltersQuery();

  return (
    <FormSelect
      isLoading={isLoading}
      isError={isError}
      options={data?.data.network_types}
      fullWidth
      { ...props }
    />
  );
};