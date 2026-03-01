//ui
import { Button } from '@mui/material';
import { CoinsFilterSectionSkeleton } from '@/app/[lang]/_ui/CoinsSection/CoinsFiltersPopover/CoinsFilterSectionSkeleton';
import { ErrorMessage } from '@/shared/ui/messages/ErrorMessage';
//types
import { TFilterOption } from '@/features/coins/api/coinsFilters/getCoinsFilters';
import type { TCoinFilters } from '@/features/coins/api/coinsFilters/getCoinsFilters';

type TFilterSectionProps = {
  title: string;
  options?: TFilterOption[];
  selectedOptions: string[];
  isPending: boolean;
  filterKey: keyof TCoinFilters;
  optionKey: keyof TFilterOption;
  onChange: ( key: keyof TCoinFilters, id: string) => void
}

export const CoinsFilterSection: React.FC<TFilterSectionProps> = ({
  title,
  options,
  selectedOptions,
  isPending,
  filterKey,
  optionKey,
  onChange,
}) => {
  if(isPending) return <CoinsFilterSectionSkeleton/>;
  if(!options) return <ErrorMessage/>;

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