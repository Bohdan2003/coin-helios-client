//components
import { InfoSection } from '@/app/coin/[coinId]/components/InfoSection/InfoSection';
import { ContactsSection } from '@/app/coin/[coinId]/components/ContactsSection/ContactsSection';
import { CommunitySection } from '@/app/coin/[coinId]/components/CommunitySection/CommunitySection';
import { Category } from '@/app/coin/[coinId]/components/Category';

export default async function Coin({ params: { coinId } }: { params: { coinId: string } }) {
  console.log(coinId);

  return (
    <>
      <div className="mt-[40px] mx-auto px-[20px] max-w-[1400px] grid grid-cols-[2fr_1fr] gap-[20px]">
        <div>

        </div>
        <div>
          <div className="grid gap-[16px]">
            <InfoSection/>
            <ContactsSection/>
            <CommunitySection/>
          </div>
          <Category className="mt-[24px]"/>
        </div>
      </div>
    </>
  );
};