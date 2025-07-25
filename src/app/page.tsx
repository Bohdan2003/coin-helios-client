'use client'
//hooks
import { useTheme } from "@mui/material/styles";
//ui
import Image from "next/image"
//components
import { WelcomeSection } from "@/app/components/WelcomeSection/WelcomeSection";
import { TopCoinsSection } from "@/app/components/TopCoinsSection/TopCoinsSection";
//img url
import lightBgUrl from "@/assets/images/home/light-bg.png"
import darkBgUrl from "@/assets/images/home/dark-bg.png"

export default function Home() {
  const theme = useTheme();

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
            src={theme.palette.mode === "light" ? lightBgUrl : darkBgUrl}
            alt="bg"
            height="894"
            width="1648"
          />
        </div>
      </div>
    </>
  );
}
