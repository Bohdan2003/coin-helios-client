//ui
import { ContactItem } from '@/app/[lang]/coins/[coinId]/_ui/ContactsSection/ContactItem';
//types
import { TLocale } from '@/shared/i18n/dictionaries';
//utils
import { getCoinInfo } from '@/features/coins/api/coin/getCoinInfo';
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
  const { coin: { contacts: d } } = await getDictionary(lang);
  const data = await getCoinInfo({ id });
  console.log(data);

  return (
    <section className={cn('p-[16px] rounded-[16px]', sectionBorderCls)}>
      <h3 className={smallTitleCls}>{ d.title }</h3>
      <dl className="mt-[16px] grid gap-[16px] max-w-[400px]">
        <ContactItem
          title="Ethereum"
          text="0x2E10348eE563dEc5FE483DE558D1946b7A3"
        />
        <ContactItem
          title="Ethereum"
          text="0x2E10348eE563dEc5FE483DE558D1946b7A3"
        />
      </dl>
    </section>
  );
};