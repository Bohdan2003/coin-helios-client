//components
import { PartnerSlider } from '@/app/components/WelcomeSection/PartnerSlider';
//ui
import { Button } from '@mui/material';

export const WelcomeSection: React.FC = () => {
  return (
    <section>
      <div className="grid sm:grid-cols-2 gap-[20px]">
        <div className="mt-[20px] sm:mt-0 flex xl:block flex-col justify-center gap-[20px] sm:gap-[30px]">
          <h1 className="max-w-[568px] font-inter font-medium text-[26px] sm:text-[32px] md:text-[36px] lg:text-[48px] xl:text-[55px] leading-[110%]">
            Ratings and analytics of cryptocurrencies in real&#8209;time
          </h1>
          <p className="max-w-[426px] xl:mt-[24px]">
            Stay updated with real-time cryptocurrency data,
            ratings, and market insights to make informed
            investment decisions
          </p>
          <div className="xl:mt-[40px] flex gap-[16px]">
            <Button
              className="w-full sm:w-auto"
              variant="contained"
            >Add coin</Button>
            <Button
              className="w-full sm:w-auto"
              variant="outlined"
            >Become a Partner</Button>
          </div>
        </div>

        <div className="-order-1 sm:order-1">
          <PartnerSlider/>
        </div>
      </div>
    </section>
  );
};