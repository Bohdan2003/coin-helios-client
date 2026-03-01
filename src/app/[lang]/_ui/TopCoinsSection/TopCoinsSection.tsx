//ui
import { TopCoinsTable } from '@/app/[lang]/_ui/TopCoinsSection/TopCoinsTable';
//types
import { TLocale } from '@/shared/i18n/dictionaries';
//helper
import { getDictionary } from '@/shared/i18n/dictionaries';

export const TopCoinsSection: React.FC<{
  lang: TLocale
}> = async ({ lang }) => {
  const {
    main: { 'top-coins': t },
    tables: { th },
    errors
  } = await getDictionary(lang);

  return (
    <section>
      <h3 className="font-medium text-[20px] pl-[16px]">{ t.title }</h3>
      <TopCoinsTable dictionary={{ th, errors }}/>
    </section>
  );
};
