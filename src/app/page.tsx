//components
import { WelcomeSection } from '@/app/ui/WelcomeSection/WelcomeSection';
import { TopCoinsSection } from '@/app/ui/TopCoinsSection/TopCoinsSection';
import { CoinsSection } from '@/app/ui/CoinsSection/CoinsSection';
import { PartnerSection } from '@/app/ui/PartnerSection/PartnerSection';
import { QuestionsSection } from '@/app/ui/QuestionsSection/QuestionsSection';
import { LatestNewsSection } from '@/features/news/ui/LatestNewsSection/LatestNewsSection';
//ui
import { GooBg } from '@/shared/ui/bg/GooBg/GooBg';

//TODO: need to add loading
export default async function Home() {
  return (
    <>
      <div className="max-w-[1648px] px-[20px] sm:px-[10px] ml-auto mr-auto mt-[20px] xl:mt-[38px]">
        <GooBg
          className="rounded-[16px] overflow-hidden sm:pt-[14px] sm:pb-[14px] xl:pb-[24px] sm:px-[14px]"
          breakpointOfHidden="sm"
        >
          <div>
            <WelcomeSection/>
            <div className="mt-[80px] sm:mt-[40px] flex flex-col sm:grid grid-cols-2 gap-[80px] sm:gap-[20px]">
              <TopCoinsSection/>
              <TopCoinsSection/>
            </div>
          </div>
        </GooBg>
      </div>
      <div
        className="mt-[80px]"
        id="coins"
      >
        <CoinsSection/>
      </div>
      <div
        className="mt-[80px]"
        id="partner"
      >
        <PartnerSection/>
      </div>
      <div className="mt-[80px] sm:mt-[140px]">
        <LatestNewsSection/>
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
