//ui
import { InfoItem } from '@/app/[lang]/coins/[coinId]/_ui/InfoSection/InfoItem';
//types
import { TLocale } from '@/shared/i18n/dictionaries';
//utils
import {
  smallTitleCls,
  sectionBorderCls
} from '@/shared/classNames';
import { cn } from '@/shared/lib/cn';
import { NumberFormatter } from '@/shared/lib/NumberFormatter';
import { getDictionary } from '@/shared/i18n/dictionaries';

export const InfoSection: React.FC<{ lang: TLocale }> = async ({ lang }) => {
  const { coin: { info: d } } = await getDictionary(lang);
  const getReadablePrice = NumberFormatter.getReadablePrice.bind(NumberFormatter);

  return (
    <section className={cn('p-[16px] rounded-[16px]', sectionBorderCls)}>
      <h3 className={smallTitleCls}>{ d.title }</h3>
      <dl className="mt-[16px] grid gap-[16px]">
        <InfoItem
          title={ d.price.title }
          text={getReadablePrice( 94668.89 )}
          helpText={ d.price.helpText }
        />
        <InfoItem
          title={ d['24h-volume'].title }
          text={getReadablePrice( 94668.89 )}
          helpText={ d['24h-volume'].helpText }
        />
        <InfoItem
          title={ d['marketCap'].title }
          text={getReadablePrice( 94668.89 )}
          helpText={ d['marketCap'].helpText }
        />
        <InfoItem
          title={ d['volume-marketCap'].title }
          text='0.96'
          helpText={ d['volume-marketCap'].helpText }
        />
        <InfoItem
          title={ d['fully-diluted-marketCap'].title }
          text={getReadablePrice( 94668.89 )}
          helpText={ d['fully-diluted-marketCap'].helpText }
        />
        <InfoItem
          title={ d['all-time-high'].title }
          text={getReadablePrice( 94668.89 )}
          helpText={ d['all-time-high'].helpText }
        />
      </dl>
    </section>
  );
};