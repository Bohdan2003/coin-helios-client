'use client';
//hooks
import { useCoinPriceQuery } from '@/features/coins/api/coin/useCoinPriceQuery';
//ui
import Skeleton from '@mui/material/Skeleton';
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
  const getReadablePrice = NumberFormatter.getReadablePrice.bind(NumberFormatter);

  if (isError) return (
    <div className={cn('font-inter', className)}>
      <span className="opacity-70">{errors.error}</span>
    </div>
  );
  

  return (
    <div className={cn('font-inter grid gap-[16px]', className)}>
      <div className="flex justify-between items-center gap-[20px]">
        {isPending
          ? <Skeleton variant="text" width={140} height={24} />
          : <span className="text-[20px]">{getReadablePrice(data?.current_price)}</span>
        }
      </div>
      <div className="h-[5px] rounded-full bg-gradient-to-r from-[#2CFAA1] to-[#1A24E9]"></div>
      <div className="flex justify-between items-center gap-[20px]">
        {isPending ? (
          <>
            <Skeleton variant="text" width={80} height={20} />
            <Skeleton variant="text" width={100} height={20} />
            <Skeleton variant="text" width={80} height={20}/>
          </>
        ) : (
          <>
            <span>{getReadablePrice(data?.min_price_24h)}</span>
            <span className="opacity-70 text-center">{d.range}</span>
            <span>{getReadablePrice(data?.max_price_24h)}</span>
          </>
        )}
      </div>
    </div>
  );
};
