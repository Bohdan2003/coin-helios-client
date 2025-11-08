//ui
import { IntroSection } from '@/app/[lang]/coin/[coinId]/_ui/IntroSection';
import { PriceHistorySection } from '@/app/[lang]/coin/[coinId]/_ui/PriceHistorySection/PriceHistorySection';
import { Descriptions } from '@/app/[lang]/coin/[coinId]/_ui/Descriptions/Descriptions';
import { Price } from '@/app/[lang]/coin/[coinId]/_ui/Price';
import { InfoSection } from '@/app/[lang]/coin/[coinId]/_ui/InfoSection/InfoSection';
import { ContactsSection } from '@/app/[lang]/coin/[coinId]/_ui/ContactsSection/ContactsSection';
import { CommunitySection } from '@/app/[lang]/coin/[coinId]/_ui/CommunitySection/CommunitySection';
import { CalculatorSection } from '@/app/[lang]/coin/[coinId]/_ui/CalculatorSection';
import { Category } from '@/app/[lang]/coin/[coinId]/_ui/Category';
import { LatestNewsSection } from '@/modules/news/ui/LatestNewsSection';
import { MarketsSection } from '@/app/[lang]/coin/[coinId]/_ui/MarketsSection/MarketsSection';

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