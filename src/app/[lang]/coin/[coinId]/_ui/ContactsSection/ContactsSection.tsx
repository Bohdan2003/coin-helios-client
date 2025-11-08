//ui
import { ContactItem } from '@/app/[lang]/coin/[coinId]/_ui/ContactsSection/ContactItem';
//utils
import {
  smallTitleCls,
  sectionBorderCls,
} from '@/shared/classNames/classNames';
import { cn } from '@/shared/lib/cn';

export const ContactsSection: React.FC = () => {
  return (
    <section className={cn('p-[16px] rounded-[16px]', sectionBorderCls)}>
      <h3 className={smallTitleCls}>Contract adress</h3>
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