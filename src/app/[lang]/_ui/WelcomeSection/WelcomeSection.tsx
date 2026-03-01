//ui
import { PartnerSlider } from '@/app/[lang]/_ui/WelcomeSection/PartnerSlider';
import { LinkAsButton } from '@/shared/ui/links/LinkAsButton';
//types
import { TLocale } from '@/shared/i18n/dictionaries';
//utils
import { getDictionary } from '@/shared/i18n/dictionaries';
import { ROUTES } from '@/shared/routes';

export const WelcomeSection: React.FC<{
  lang: TLocale
}> = async ({ lang }) => {
  const {
    main: { welcome: w },
    links: l
  } = await getDictionary(lang);

  return (
    <section>
      <div className="grid sm:grid-cols-2 gap-[20px]">
        <div className="mt-[20px] sm:mt-0 flex xl:block flex-col justify-center gap-[20px] sm:gap-[30px]">
          <h1 className="sm:whitespace-pre-line font-inter font-medium text-[26px] sm:text-[32px] md:text-[38px] lg:text-[48px] xl:text-[55px] leading-[110%]">
            { w.title }
          </h1>
          <p className="sm:max-w-[426px] xl:mt-[24px]">
            { w.text }
          </p>
          <div className="xl:mt-[40px] flex gap-[16px]">
            <LinkAsButton
              className="w-full sm:w-auto"
              href={ROUTES.ADD_COIN}
              variant="contained"
            >
              { l['addCoin'] }
            </LinkAsButton>
            <LinkAsButton
              href={ROUTES.BECOME_A_PARTNER}
              className="w-full sm:w-auto"
              variant="outlined"
            >
              { l['becomePartner'] }
            </LinkAsButton>
          </div>
        </div>

        <div className="-order-1 sm:order-1">
          <PartnerSlider/>
        </div>
      </div>
    </section>
  );
};