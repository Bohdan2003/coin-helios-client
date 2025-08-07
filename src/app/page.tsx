//sections
import { WelcomeSection } from '@/app/sections/WelcomeSection/WelcomeSection';
import { TopCoinsSection } from '@/app/sections/TopCoinsSection/TopCoinsSection';
import { CoinsSection } from '@/app/sections/CoinsSection/CoinsSection';
import { PartnerSection } from '@/app/sections/PartnerSection/PartnerSection';
import { QuestionsSection } from '@/app/sections/QuestionsSection/QuestionsSection';
//ui
import { WelcomeImage } from '@/app/components/WelcomeImage';

//TODO: need to add loading
export default async function Home() {
  return (
    <>
      <div className="container mt-[38px] pt-[14px] pb-[10px] xl:pb-[24px] relative">
        <div className="relative z-10">
          <WelcomeSection/>
          <div className="mt-[40px] grid grid-cols-2 gap-[20px]">
            <TopCoinsSection/>
            <TopCoinsSection/>
          </div>
        </div>
        <div className="absolute top-0 bottom-0 left-[10px] xl:left-0 right-[10px] xl:right-0 rounded-[16px]">
          <WelcomeImage/>
        </div>
      </div>
      <div className="mt-[80px]">
        <CoinsSection/>
      </div>
      <div className="mt-[80px]">
        <PartnerSection/>
      </div>
      <div className="mt-[140px]">
        <QuestionsSection/>
      </div>
    </>
  );
}
