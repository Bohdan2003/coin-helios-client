//components
import { IntroSection } from '@/app/coin/[coinId]/components/IntroSection';
import { PriceHistorySection } from '@/app/coin/[coinId]/components/PriceHistorySection/PriceHistorySection';
import { Descriptions } from '@/app/coin/[coinId]/components/Descriptions/Descriptions';
import { Price } from '@/app/coin/[coinId]/components/Price';
import { InfoSection } from '@/app/coin/[coinId]/components/InfoSection/InfoSection';
import { ContactsSection } from '@/app/coin/[coinId]/components/ContactsSection/ContactsSection';
import { CommunitySection } from '@/app/coin/[coinId]/components/CommunitySection/CommunitySection';
import { CalculatorSection } from '@/app/coin/[coinId]/components/CalculatorSection';
import { Category } from '@/app/coin/[coinId]/components/Category';
import { LatestNewsSection } from '@/components/LatestNewsSection/LatestNewsSection';
import { MarketsSection } from '@/app/coin/[coinId]/components/MarketsSection/MarketsSection';

export default async function Coin({ params }: { params: { coinId: string } }) {
  const { coinId } = await params;

  return (
    <>
      <div className="mt-[40px] mx-auto px-[20px] max-w-[1400px] grid grid-cols-[2fr_1fr] gap-[20px]">
        <div>
          <IntroSection id={coinId}/>
          <div className="mt-[20px]">
            <PriceHistorySection id={coinId}/>
          </div>
          <div className="mt-[40px]">
            <Descriptions id={coinId}/>
          </div>
          <div className="mt-[80px]">
            <MarketsSection id={coinId}/>
          </div>
        </div>
        <div>
          <Price/>
          <div className="mt-[24px] grid gap-[16px]">
            <InfoSection/>
            <ContactsSection/>
            <CommunitySection/>
            <CalculatorSection/>
          </div>
          <div className="mt-[24px]">
            <Category/>
          </div>
        </div>
      </div>
      <div className="mt-[80px]">
        <LatestNewsSection/>
      </div>
    </>
  );
};