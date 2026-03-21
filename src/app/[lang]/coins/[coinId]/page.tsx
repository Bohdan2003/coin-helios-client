//ui
import { IntroSection } from '@/app/[lang]/coins/[coinId]/_ui/IntroSection';
import { PriceHistorySection } from '@/app/[lang]/coins/[coinId]/_ui/PriceHistorySection/PriceHistorySection';
import { Descriptions } from '@/app/[lang]/coins/[coinId]/_ui/Descriptions/Descriptions';
import { Price } from '@/app/[lang]/coins/[coinId]/_ui/Price';
import { InfoSection } from '@/app/[lang]/coins/[coinId]/_ui/InfoSection/InfoSection';
import { ContactsSection } from '@/app/[lang]/coins/[coinId]/_ui/ContactsSection/ContactsSection';
import { CommunitySection } from '@/app/[lang]/coins/[coinId]/_ui/CommunitySection/CommunitySection';
import { CalculatorSection } from '@/app/[lang]/coins/[coinId]/_ui/CalculatorSection/CalculatorSection';
import { Category } from '@/app/[lang]/coins/[coinId]/_ui/Category';
import { LatestNewsSection } from '@/features/news/ui/LatestNewsSection';
import { MarketsSection } from '@/app/[lang]/coins/[coinId]/_ui/MarketsSection/MarketsSection';
//types
import { TLocale } from '@/shared/i18n/dictionaries';

export default async function Coin({ 
  params 
}: { 
  params: Promise<{
    coinId: string,
    lang: TLocale
  }> 
}) {
  const { coinId, lang } = await params;

  return (
    <>
      <div className="mt-[40px] mx-auto px-[20px] max-w-[1400px] md:grid grid-cols-[2fr_1fr] gap-[20px]">
        <IntroSection
          id={coinId}
          lang={lang}
        />
        {/*<Price*/}
        {/*  className="mt-[24px] md:mt-0 md:col-start-2"*/}
        {/*  id={coinId}*/}
        {/*  lang={lang}*/}
        {/*/>*/}
        {/*<PriceHistorySection*/}
        {/*  className="mt-[40px] md:mt-[20px] min-w-0"*/}
        {/*  id={coinId}*/}
        {/*  lang={lang}*/}
        {/*/>*/}
        {/*<div className="col-start-2 row-span-2">*/}
        {/*  <div className="mt-[24px] grid gap-[16px]">*/}
        {/*    <InfoSection lang={lang}/>*/}
        {/*    <ContactsSection*/}
        {/*      id={coinId}*/}
        {/*      lang={lang}*/}
        {/*    />*/}
        {/*    <CommunitySection lang={lang}/>*/}
        {/*    <CalculatorSection lang={lang}/>*/}
        {/*  </div>*/}
        {/*  <Category*/}
        {/*    className="mt-[24px]"*/}
        {/*    id={coinId}*/}
        {/*    lang={lang}*/}
        {/*  />*/}
        {/*</div>*/}
        <div>
          {/*<Descriptions*/}
          {/*  className="mt-[24px] sm:mt-[40px]"*/}
          {/*  id={coinId}*/}
          {/*/>*/}
          {/*<MarketsSection*/}
          {/*  className="mt-[80px]"*/}
          {/*  id={coinId}*/}
          {/*  lang={lang}*/}
          {/*/>*/}
        </div>
      </div>
      <div className="mt-[80px]">
        <LatestNewsSection lang={lang} />
      </div>
    </>
  );
};