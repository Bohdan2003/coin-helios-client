'use client';
//hooks
import { useCoinPriceQuery } from '@/features/coins/api/coin/useCoinPriceQuery';
//ui
import { InfoItem } from '@/app/[lang]/coins/[coinId]/_ui/InfoSection/InfoItem';
import Skeleton from '@mui/material/Skeleton';
//types
import { TDictionary } from '@/shared/i18n/dictionaries';
//utils
import {
  smallTitleCls,
  sectionBorderCls
} from '@/shared/classNames';
import { cn } from '@/shared/lib/cn';
import { NumberFormatter } from '@/shared/lib/NumberFormatter';

export const InfoSection: React.FC<{
  id: string;
  dictionary: {
    coin: { info: TDictionary['coin']['info'] };
    errors: TDictionary['errors'];
  };
}> = ({ id, dictionary: { coin: { info: d }, errors } }) => {
  const { data, isPending, isError } = useCoinPriceQuery(id);

  if (isError) return (
    <section className={cn('p-[16px] rounded-[16px]', sectionBorderCls)}>
      <span className="opacity-70">{errors.error}</span>
    </section>
  );

  return (
    <section className={cn('p-[16px] rounded-[16px]', sectionBorderCls)}>
      <h3 className={smallTitleCls}>{ d.title }</h3>
      {isPending ? (
        <div className="mt-[16px] grid gap-[16px]">
          {Array.from({ length: 5 }).map((_, i) => (
            <Skeleton key={i} variant="text" height={24} />
          ))}
        </div>
      ) : (
        <dl className="mt-[16px] grid gap-[16px]">
          <InfoItem
            title={ d.price.title }
            text={NumberFormatter.getReadablePrice(data?.current_price, errors.noData)}
            helpText={ d.price.helpText }
          />
          <InfoItem
            title={ d['24h-volume'].title }
            text={NumberFormatter.getReadablePrice(data?.volume_24, errors.noData)}
            helpText={ d['24h-volume'].helpText }
          />
          <InfoItem
            title={ d['marketCap'].title }
            text={NumberFormatter.getReadablePrice(data?.market_cap, errors.noData)}
            helpText={ d['marketCap'].helpText }
          />
          <InfoItem
            title={ d['volume-marketCap'].title }
            text={NumberFormatter.getReadableNum(data?.volume_to_mcap, errors.noData)}
            helpText={ d['volume-marketCap'].helpText }
          />
          <InfoItem
            title={ d['fully-diluted-marketCap'].title }
            text={NumberFormatter.getReadablePrice(data?.fdm, errors.noData)}
            helpText={ d['fully-diluted-marketCap'].helpText }
          />
        </dl>
      )}
    </section>
  );
};
