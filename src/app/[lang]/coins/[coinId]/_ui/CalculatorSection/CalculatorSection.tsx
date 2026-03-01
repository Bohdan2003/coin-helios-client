//ui
import { Calculator } from '@/app/[lang]/coins/[coinId]/_ui/CalculatorSection/Calculator';
//types
import { TLocale } from '@/shared/i18n/dictionaries';
//utils
import { cn } from '@/shared/lib/cn';
import { sectionBorderCls } from '@/shared/classNames';
import { getDictionary } from '@/shared/i18n/dictionaries';

export const CalculatorSection: React.FC<{ lang: TLocale }> = async ({ lang }) => {
  const { coin: { calculator } } = await getDictionary(lang);

  return (
    <section className={cn(sectionBorderCls, 'rounded-[16px] font-inter font-medium')}>
      <Calculator dictionary={calculator}/>
    </section>
  );
};
