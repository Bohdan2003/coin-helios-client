'use server';
//ui
import Image from 'next/image';
//sections
import { WelcomeSection } from '@/app/sections/WelcomeSection/WelcomeSection';
import { TopCoinsSection } from '@/app/sections/TopCoinsSection/TopCoinsSection';
import { CoinsSection } from '@/app/sections/CoinsSection/CoinsSection';
import { PartnerSection } from '@/app/sections/PartnerSection/PartnerSection';
import { QuestionsSection } from '@/app/sections/QuestionsSection/QuestionsSection';
//img url
import lightBgUrl from '@/assets/images/home/light-bg.png';
import darkBgUrl from '@/assets/images/home/dark-bg.png';
//utils
import { cookies } from 'next/headers';

//TODO: need to add loading
export default async function Home() {
  const cookieStore = await cookies();
  const theme = cookieStore.get('theme')?.value;

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
          <Image
            className="size-full"
            src={theme === 'light' ? lightBgUrl : darkBgUrl}
            alt="bg"
            height="894"
            width="1648"
          />
        </div>
      </div>
      <div className="mt-[76px]">
        <CoinsSection/>
      </div>
      <div className="mt-[140px]">
        <PartnerSection/>
      </div>
      <div className="mt-[140px]">
        <QuestionsSection/>
      </div>
    </>
  );
}
