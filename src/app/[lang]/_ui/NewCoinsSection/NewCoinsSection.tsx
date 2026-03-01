//ui
import { NewCoinsTable } from '@/app/[lang]/_ui/NewCoinsSection/NewCoinsTable';
//types
import { TLocale } from '@/shared/i18n/dictionaries';
//helper
import { getDictionary } from '@/shared/i18n/dictionaries';

export const NewCoinsSection: React.FC<{
  lang: TLocale
}> = async ({ lang }) => {
  const {
    main: { 'new-coins': t },
    tables: { th },
    errors
  } = await getDictionary(lang);

  return (
    <section>
      <h3 className="font-medium text-[20px] pl-[16px]">{ t.title }</h3>
      <NewCoinsTable dictionary={{ th, errors }}/>
    </section>
  );
};
