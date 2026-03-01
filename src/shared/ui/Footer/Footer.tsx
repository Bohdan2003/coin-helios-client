//ui
import { LocalizedLink } from '@/shared/ui/links/LocalizedLink';
import { Logo } from '@/shared/ui/Logo';
import { LanguageSwitcher } from '@/shared/ui/switchers/LanguageSwitcher';
import { ThemeSwitcher } from '@/shared/ui/switchers/ThemeSwitcher';
import { Socials } from '@/shared/ui/Footer/Socials';
//types
import { TLocale } from '@/shared/i18n/dictionaries';
//utils
import { getDictionary } from '@/shared/i18n/dictionaries';
import { ROUTES } from '@/shared/routes';
//helpers
import { getNavItems } from '@/shared/ui/Footer/helper';

const listCls = 'grid gap-[8px] sm:gap-[16px]';

export const Footer: React.FC<{ lang: TLocale }> = async ({ lang }) => {
  const {
    links: l,
    footer: f
  } = await getDictionary(lang);
  const navItems = await getNavItems(lang);

  return (
    <footer className="bg-purple py-[20px] text-white">
      <div className="container">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-[1fr_auto_auto_auto_auto] items-start gap-[38px] sm:gap-[48px] lg:gap-[76px]">
          <div className="grid gap-[16px] col-span-2 lg:col-span-1">
            <Logo/>
            <p className="max-w-[520px] md:max-w-[740px] lg:max-w-[520px]">
              { f.text }
            </p>
          </div>
          <nav>
            <ul className={listCls}>
              {
                navItems.slice(0, Math.round(navItems.length / 2)).map(({ text, href }, i) => (
                  <li key={i}><LocalizedLink href={href}>{text}</LocalizedLink></li>
                ))
              }
            </ul>
          </nav>
          <nav>
            <ul className={listCls}>
              {
                navItems.slice(Math.round(navItems.length / 2), navItems.length).map(({ text, href }, i) => (
                  <li key={i}><LocalizedLink href={href}>{text}</LocalizedLink></li>
                ))
              }
            </ul>
          </nav>
          <div>
            <p className="opacity-70">{ f.socials }</p>
            <a
              className="block mt-[8px] sm:mt-[16px]"
              href="mailto:mukanovskiyyy@gmail.com"
            >mukanovskiyyy@gmail.com</a>
            <Socials className="mt-[16px] sm:mt-[24px]"/>
          </div>
          <div className="row-start-1 lg:row-start-auto sm:col-start-3 lg:col-start-auto flex items-center lg:justify-center gap-[20px] xl:gap-[60px]">
            <LanguageSwitcher
              sx={{
                color: 'var(--white)',
                '& .MuiSelect-icon': { color: 'var(--white)' },
              }}
            />
            <ThemeSwitcher sx={{ color: 'var(--white)' }}/>
          </div>
          <p className="row-start-6 sm:row-start-auto -mt-[24px] sm:mt-0">{ f.rights }</p>
          <a className="row-start-5 sm:row-start-auto" href={ROUTES.PRIVACY_POLICY}>
            { l['termsOfUse'] }
          </a>
          <a className="row-start-5 sm:row-start-auto" href={ROUTES.TERMS_OF_USE}>
            { l['privacyPolicy'] }
          </a>
        </div>
      </div>
    </footer>
  );
};