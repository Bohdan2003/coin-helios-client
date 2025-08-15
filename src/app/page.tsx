//sections
import { WelcomeSection } from '@/app/sections/WelcomeSection/WelcomeSection';
import { TopCoinsSection } from '@/app/sections/TopCoinsSection/TopCoinsSection';
import { CoinsSection } from '@/app/sections/CoinsSection/CoinsSection';
import { PartnerSection } from '@/app/sections/PartnerSection/PartnerSection';
import { QuestionsSection } from '@/app/sections/QuestionsSection/QuestionsSection';
//ui
import { WelcomeImage } from '@/app/ui/WelcomeImage';

//TODO: need to add loading
export default async function Home() {
  return (
    <>
      <div className="container mt-[20px] xl:mt-[38px] sm:pt-[14px] sm:pb-[14px] xl:pb-[24px] relative">
        <div className="relative z-10">
          <WelcomeSection/>
          <div className="mt-[80px] sm:mt-[40px] flex flex-col sm:grid grid-cols-2 gap-[80px] sm:gap-[20px]">
            <TopCoinsSection/>
            <TopCoinsSection/>
          </div>
        </div>
        <div className="hidden sm:block absolute top-0 bottom-0 left-[10px] xl:left-0 right-[10px] xl:right-0 rounded-[16px]">
          <WelcomeImage/>
        </div>
      </div>
      {/*<div*/}
      {/*  className="mt-[80px]"*/}
      {/*  id="coins"*/}
      {/*>*/}
      {/*  <CoinsSection/>*/}
      {/*</div>*/}
      <div
        className="mt-[80px]"
        id="partner"
      >
        <PartnerSection/>
      </div>
      <div
        className="mt-[80px] sm:mt-[140px]"
        id="faq"
      >
        <QuestionsSection/>
      </div>
    </>
  );
}
