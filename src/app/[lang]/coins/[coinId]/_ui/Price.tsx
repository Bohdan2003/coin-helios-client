'use client';
//hooks
import { useCoinPriceQuery } from '@/features/coins/api/coin/useCoinPriceQuery';
//ui
import Skeleton from '@mui/material/Skeleton';
import { PercentChange } from '@/shared/ui/PercentChange';
//types
import { TDictionary } from '@/shared/i18n/dictionaries';
//utils
import { cn } from '@/shared/lib/cn';
import { NumberFormatter } from '@/shared/lib/NumberFormatter';

export const Price: React.FC<{
  id: string;
  dictionary: {
    coin: { price: TDictionary['coin']['price'] };
    errors: TDictionary['errors'];
  };
  className?: string;
}> = ({ id, dictionary: { coin: { price: d }, errors }, className }) => {
  const { data, isPending, isError } = useCoinPriceQuery(id);

  if (isError) return (
    <div className={cn('font-inter', className)}>
      <span className="opacity-70">{errors.error}</span>
    </div>
  );
  

  return (
    <div className={cn('font-inter grid gap-[16px]', className)}>
      <div className="flex justify-between items-center gap-[20px]">
        {isPending
          ? 
          <>
            <Skeleton variant="text" width={140} height={24} />
            <Skeleton variant="text" width={140} height={24} />
          </>
          : 
          <>
            <span className="text-[20px]">{NumberFormatter.getReadablePrice(data?.current_price, errors.noData)}</span>
            {
              data?.percent_change_24h !== null
              ?
              <PercentChange
                className="text-[20px]"
                percent={data?.percent_change_24h}
              />
              :
              <span className="opacity-70">{errors.noData}</span>
            }
          </>
        }
      </div>
      <div className="h-[5px] rounded-full bg-gradient-to-r from-[#2CFAA1] to-[#1A24E9]"></div>
      <div className="flex justify-between items-center gap-[20px]">
        {isPending ? 
          <>
            <Skeleton variant="text" width={80} height={20} />
            <Skeleton variant="text" width={100} height={20} />
            <Skeleton variant="text" width={80} height={20}/>
          </>
        :
          <>
            <span>{NumberFormatter.getReadablePrice(data?.min_price_24h, errors.noData)}</span>
            <span className="opacity-70 text-center">{d.range}</span>
            <span>{NumberFormatter.getReadablePrice(data?.max_price_24h, errors.noData)}</span>
          </>
        }
      </div>
    </div>
  );
};
