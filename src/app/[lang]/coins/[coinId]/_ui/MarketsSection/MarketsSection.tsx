//ui
import { MarketsTable } from '@/app/[lang]/coins/[coinId]/_ui/MarketsSection/MarketsTable';
//types
import { TLocale } from '@/shared/i18n/dictionaries';
//utils
import { cn } from '@/shared/lib/cn';
import { smallTitleCls } from '@/shared/classNames';
import { getDictionary } from '@/shared/i18n/dictionaries';

export const MarketsSection: React.FC<{
  id: string;
  lang: TLocale;
  className?: string;
}> = async ({ id, lang, className }) => {
  const { errors, tables: { th } } = await getDictionary(lang);

  return (
    <section
      className={cn(className)}
      id="markets"
    >
      <h3 className={smallTitleCls}>Markets</h3>
      <div className="mt-[16px]">
        <MarketsTable
          id={id}
          dictionary={{ errors, th }}
        />
      </div>
    </section>
  );
};