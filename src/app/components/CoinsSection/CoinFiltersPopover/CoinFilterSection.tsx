//ui
import { Button } from '@mui/material';
import { CoinFilterSectionSkeleton } from '@/app/components/CoinsSection/CoinFiltersPopover/CoinFilterSectionSkeleton';
//types
import { TFilterOption } from '@/utils/types/filter';
import type { TCoinFiltersData } from '@/modules/coins/CoinsApi';

type TFilterSectionProps = {
  title: string;
  options?: TFilterOption[];
  selectedOptions: string[];
  isPending: boolean;
  isError: boolean;
  filterKey: keyof TCoinFiltersData;
  optionKey: keyof TFilterOption;
  onChange: ( filterKey: keyof TCoinFiltersData, id: string) => void
}

export const CoinFilterSection: React.FC<TFilterSectionProps> = ({
  title,
  options,
  selectedOptions,
  isPending,
  isError,
  filterKey,
  optionKey,
  onChange,
}) => {
  if(isPending) return <CoinFilterSectionSkeleton/>;
  if(isError || !options) return <div>Some thing went wrong</div>;

  return (
    <div>
      <p className="text-[14px] font-medium opacity-60">{title}</p>
      <div className="mt-[12px] flex gap-[6px] flex-wrap">
        {options.map((option) => {
          const isActive = selectedOptions.includes(option[optionKey]);
          return (
            <Button
              key={option.id}
              onClick={() => onChange(filterKey, option[optionKey])}
              size="small"
              variant={isActive ? 'contained' : 'text'}
            >
              {option.name}
            </Button>
          );
        })}
      </div>
    </div>
  );
};