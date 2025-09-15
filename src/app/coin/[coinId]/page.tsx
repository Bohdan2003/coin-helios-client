//components
import { Price } from '@/app/coin/[coinId]/components/Price';
import { InfoSection } from '@/app/coin/[coinId]/components/InfoSection/InfoSection';
import { ContactsSection } from '@/app/coin/[coinId]/components/ContactsSection/ContactsSection';
import { CommunitySection } from '@/app/coin/[coinId]/components/CommunitySection/CommunitySection';
import { CalculatorSection } from '@/app/coin/[coinId]/components/CalculatorSection';
import { Category } from '@/app/coin/[coinId]/components/Category';

export default async function Coin({ params: { coinId } }: { params: { coinId: string } }) {
  console.log(coinId);

  return (
    <>
      <div className="mt-[40px] mx-auto px-[20px] max-w-[1400px] grid grid-cols-[2fr_1fr] gap-[20px]">
        <div>
        </div>
        <div>
          <Price/>
          <div className="mt-[24px] grid gap-[16px]">
            <InfoSection/>
            <ContactsSection/>
            <CommunitySection/>
            <CalculatorSection/>
          </div>
          <Category className="mt-[24px]"/>
        </div>
      </div>
    </>
  );
};