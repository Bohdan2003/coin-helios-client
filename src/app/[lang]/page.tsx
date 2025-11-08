//ui
import { WelcomeSection } from '@/app/[lang]/_ui/WelcomeSection/WelcomeSection';
import { TopCoinsSection } from '@/app/[lang]/_ui/TopCoinsSection/TopCoinsSection';
import { CoinsSection } from '@/app/[lang]/_ui/CoinsSection/CoinsSection';
import { PartnerSection } from '@/app/[lang]/_ui/PartnerSection/PartnerSection';
import { QuestionsSection } from '@/app/[lang]/_ui/QuestionsSection/QuestionsSection';
import { LatestNewsSection } from '@/modules/news/ui/LatestNewsSection';
import { GooBg } from '@/shared/ui/bg/GooBg/GooBg';

//TODO: need to add loading
export default async function Home({
  params,
}: {
  params: Promise<{ lang: 'en' | 'ru' }>
}) {
  const { lang } = await params;

  return (
    <>
      <div className="max-w-[1648px] px-[20px] sm:px-[10px] ml-auto mr-auto mt-[20px] xl:mt-[38px]">
        <GooBg
          className="rounded-[16px] overflow-hidden sm:pt-[14px] sm:pb-[14px] xl:pb-[24px] sm:px-[14px]"
          breakpointOfHidden="sm"
        >
          <div>
            <WelcomeSection lang={lang}/>
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
