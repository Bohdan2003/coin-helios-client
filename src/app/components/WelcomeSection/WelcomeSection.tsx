//components
import { PartnerSlider } from "@/app/components/WelcomeSection/PartnerSlider";
//ui
import { Button } from "@mui/material";

export const WelcomeSection: React.FC = () => {
  return (
    <section>
      <div className="container">
        <div className="grid grid-cols-2 gap-[20px]">
          <div>
            <h1 className="max-w-[568px] font-inter font-medium text-[55px] leading-[110%]">
              Ratings and analytics of cryptocurrencies in real-time
            </h1>
            <p className="max-w-[426px] mt-[24px]">
              Stay updated with real-time cryptocurrency data,
              ratings, and market insights to make informed
              investment decisions
            </p>
            <div className="mt-[40px] flex gap-[16px]">
              <Button
                variant="contained"
              >Add coin</Button>
              <Button
                variant="outlined"
              >Become a Partner</Button>
            </div>
          </div>

          <PartnerSlider/>
        </div>
      </div>
    </section>
  )
}