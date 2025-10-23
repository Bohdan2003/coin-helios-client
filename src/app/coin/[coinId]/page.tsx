//components
import { IntroSection } from '@/app/coin/[coinId]/ui/IntroSection';
import { PriceHistorySection } from '@/app/coin/[coinId]/ui/PriceHistorySection/PriceHistorySection';
import { Descriptions } from '@/app/coin/[coinId]/ui/Descriptions/Descriptions';
import { Price } from '@/app/coin/[coinId]/ui/Price';
import { InfoSection } from '@/app/coin/[coinId]/ui/InfoSection/InfoSection';
import { ContactsSection } from '@/app/coin/[coinId]/ui/ContactsSection/ContactsSection';
import { CommunitySection } from '@/app/coin/[coinId]/ui/CommunitySection/CommunitySection';
import { CalculatorSection } from '@/app/coin/[coinId]/ui/CalculatorSection';
import { Category } from '@/app/coin/[coinId]/ui/Category';
import { LatestNewsSection } from '@/features/news/ui/LatestNewsSection/LatestNewsSection';
import { MarketsSection } from '@/app/coin/[coinId]/ui/MarketsSection/MarketsSection';

export default async function Coin({ params }: { params: { coinId: string } }) {
  const { coinId } = await params;

  return (
    <>
      <div className="mt-[40px] mx-auto px-[20px] max-w-[1400px] md:grid grid-cols-[2fr_1fr] gap-[20px]">
        <IntroSection id={coinId}/>
        <Price
          className="mt-[24px] md:mt-0 md:col-start-2"
          id={coinId}
        />
        <PriceHistorySection
          className="mt-[40px] md:mt-[20px] min-w-0"
          id={coinId}
        />
        <div className="col-start-2 row-span-2">
          <div className="mt-[24px] grid gap-[16px]">
            <InfoSection/>
            <ContactsSection/>
            <CommunitySection/>
            <CalculatorSection/>
          </div>
          <Category
            className="mt-[24px]"
            id={coinId}
          />
        </div>
        <div>
          <Descriptions
            className="mt-[24px] sm:mt-[40px]"
            id={coinId}
          />
          <MarketsSection
            className="mt-[80px]"
            id={coinId}
          />
        </div>
      </div>
      <div className="mt-[80px]">
        <LatestNewsSection/>
      </div>
    </>
  );
};