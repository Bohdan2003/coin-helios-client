import { WelcomeSection } from "@/app/components/WelcomeSection/WelcomeSection";
import { TopCoinsSection } from "@/app/components/TopCoinsSection/TopCoinsSection";

export default function Home() {
  return (
    <>
      <div className="mt-[38px] pt-[14px] pb-[24px]">
        <WelcomeSection/>
        <div className="container mt-[40px] grid grid-cols-2 gap-[20px]">
          <TopCoinsSection/>
        </div>
      </div>
    </>
  );
}
