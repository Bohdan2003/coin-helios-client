//ui
import { ContactItem } from '@/app/coin/[coinId]/components/ContactsSection/ContactItem';
//utils
import { smallTitleCls } from '@/utils/consts/clsVariable';

export const ContactsSection: React.FC = () => {
  return (
    <section className="p-[16px] rounded-[16px] border-1 border-[var(--lightGray)] dark:border-[var(--darkGray)]">
      <h3 className={smallTitleCls}>Contract adress</h3>
      <dl className="mt-[16px] grid gap-[16px] max-w-[400px]">
        <ContactItem
          title="Ethereum"
          text="0x2E10348eE563dEc5FE483DE558D1946b7A3372c2"
        />
        <ContactItem
          title="Ethereum"
          text="0x2E10348eE563dEc5FE483DE558D1946b7A3372c2E563dEc5FE483DE5"
        />
      </dl>
    </section>
  );
};