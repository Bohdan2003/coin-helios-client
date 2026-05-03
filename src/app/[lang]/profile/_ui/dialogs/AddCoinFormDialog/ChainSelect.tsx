import { FormSelect } from '@/shared/ui/fields/FormSelect';
import { useCoinsFiltersQuery } from '@/features/coins/api/coinsFilters/useCoinsFiltersQuery';

type TChainSelectProps = {
  name: string;
  label: string;
  placeholder: string;
};

export const ChainSelect: React.FC<TChainSelectProps> = ( props) => {
  const { data, isLoading, isError } = useCoinsFiltersQuery();

  return (
    <FormSelect
      isLoading={isLoading}
      isError={isError}
      options={data?.data.chains}
      fullWidth
      required
      {...props}
    />
  );
};