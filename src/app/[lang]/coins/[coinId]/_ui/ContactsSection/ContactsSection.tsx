//ui
import { ContactItem } from '@/app/[lang]/coins/[coinId]/_ui/ContactsSection/ContactItem';
//types
import { TLocale } from '@/shared/i18n/dictionaries';
//utils
import { getCoin } from '@/features/coins/api/coin/getCoin';
import {
  smallTitleCls,
  sectionBorderCls,
} from '@/shared/classNames';
import { cn } from '@/shared/lib/cn';
import { getDictionary } from '@/shared/i18n/dictionaries';

export const ContactsSection: React.FC<{
  lang: TLocale;
  id: string
}> = async ({ lang, id }) => {
  const { coin: { contacts: d }, errors } = await getDictionary(lang);

  const { contract_data } = await getCoin({ id });

  return (
    <section className={cn('p-[16px] rounded-[16px]', sectionBorderCls)}>
      <h3 className={smallTitleCls}>{ d.title }</h3>
      <dl className="mt-[16px] grid gap-[16px] max-w-[400px]">
        {contract_data.length > 0
          ? contract_data.map(({ network, address }) => (
              <ContactItem
                key={address}
                title={network}
                text={address}
              />
            ))
          : <span className="opacity-70">{errors.noData}</span>
        }
      </dl>
    </section>
  );
};