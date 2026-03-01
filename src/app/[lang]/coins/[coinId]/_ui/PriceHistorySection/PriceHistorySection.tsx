//ui
import { PeriodPriceHistoryChart } from '@/app/[lang]/coins/[coinId]/_ui/PriceHistorySection/PeriodPriceHistoryChart';
import { AllPriceHistoryChart } from '@/app/[lang]/coins/[coinId]/_ui/PriceHistorySection/AllPriceHistoryChart';
//types
import { TLocale } from '@/shared/i18n/dictionaries';
//utils
import { cn } from '@/shared/lib/cn';
import { getDictionary } from '@/shared/i18n/dictionaries';

export const PriceHistorySection: React.FC<{
  className?: string ;
  lang: TLocale;
  id: string;
}> = async ({ className, lang, id }) => {
  const { errors, coin: { priceHistory } } = await getDictionary(lang);

  return (
    <section className={cn(className)}>
      <PeriodPriceHistoryChart
        dictionary={{ errors, priceHistory }}
        id={id}
      />
      <div className="mt-[40px]">
        <AllPriceHistoryChart
          dictionary={{ errors, priceHistory }}
          id={id}
        />
      </div>
    </section>
  );
};