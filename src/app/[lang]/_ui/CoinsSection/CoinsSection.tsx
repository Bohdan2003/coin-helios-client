//ui
import { CoinsTable } from '@/app/[lang]/_ui/CoinsSection/CoinsTable';
//types
import { TLocale } from '@/shared/i18n/dictionaries';
//utils
import { getDictionary } from '@/shared/i18n/dictionaries';
//helpers
import { getFilters } from '@/app/[lang]/_ui/CoinsSection/helper';

export const CoinsSection: React.FC<{ lang: TLocale }> = async ({ lang }) => {
  const { tables, errors } = await getDictionary(lang);
  const filters = await getFilters(lang);

  return (
    <section>
      <div className="container">
        <h3 className="hidden">Coins</h3>
        <CoinsTable
          dictionary={{ tables, errors }}
          filters={filters}
        />
      </div>
    </section>
  );
};