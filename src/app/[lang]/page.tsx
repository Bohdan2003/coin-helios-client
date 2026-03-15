//ui
import { WelcomeSection } from '@/app/[lang]/_ui/WelcomeSection/WelcomeSection';
import { TopCoinsSection } from '@/app/[lang]/_ui/TopCoinsSection/TopCoinsSection';
import { NewCoinsSection } from '@/app/[lang]/_ui/NewCoinsSection/NewCoinsSection';
import { CoinsSection } from '@/app/[lang]/_ui/CoinsSection/CoinsSection';
import { PartnerSection } from '@/app/[lang]/_ui/PartnerSection/PartnerSection';
import { QuestionsSection } from '@/app/[lang]/_ui/QuestionsSection/QuestionsSection';
import { LatestNewsSection } from '@/features/news/ui/LatestNewsSection';
import { GooBg } from '@/shared/ui/bg/GooBg/GooBg';
//types
import { TLocale } from '@/shared/i18n/dictionaries';
//utils
import { getDictionary } from '@/shared/i18n/dictionaries';

export default async function Home({
  params,
}: {
  params: Promise<{ lang: TLocale }>
}) {
  const { lang } = await params;
  const d = await getDictionary(lang);

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
              <TopCoinsSection lang={lang}/>
              <NewCoinsSection lang={lang}/>
            </div>
          </div>
        </GooBg>
      </div>
      <div
        className="mt-[80px]"
        id="coins"
      >
        <CoinsSection lang={lang}/>
      </div>
      <div
        className="mt-[80px]"
        id="partner"
      >
        <PartnerSection lang={lang}/>
      </div>
      <div className="mt-[80px] sm:mt-[140px]">
        <LatestNewsSection lang={lang}/>
      </div>
      <div
        className="mt-[80px] sm:mt-[140px]"
        id="faq"
      >
        <QuestionsSection dictionary={d['main']['faq']} />
      </div>
    </>
  );
}
