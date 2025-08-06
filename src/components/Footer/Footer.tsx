//ui
import { Logo } from "@/ui/Logo";
import { LanguageSwitcher } from "@/ui/LanguageSwitcher";
import { ThemeSwitcher } from "@/ui/ThemeSwitcher";
import { Socials } from "@/ui/Socials";

const listCls = 'grid gap-[8px] sm:gap-[16px]';

export const Footer = () => {
  return (
    <footer className="bg-purple py-[20px] text-white">
      <div className="container">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-[1fr_auto_auto_auto_auto] items-start gap-[38px] sm:gap-[48px] lg:gap-[76px]">
          <div className="grid gap-[16px] col-span-2 lg:col-span-1">
            <Logo/>
            <p className="max-w-[520px] md:max-w-[740px] lg:max-w-[520px]">
              Content on our website, related platforms, forums,
              apps, social media, and blogs (&#34;Site&#34;) is sourced
              from third parties and provided for informational
              purposes only. We do not guarantee its relevance.
              This information is not financial or legal advice.
            </p>
          </div>
          <nav>
            <ul className={listCls}>
              <li>Coins</li>
              <li>News</li>
              <li>Become a Partner</li>
              <li>FAQ</li>
            </ul>
          </nav>
          <nav>
            <ul className={listCls}>
              <li>Profile</li>
              <li>Saved</li>
              <li>Add currency</li>
            </ul>
          </nav>
          <div>
            <p className="opacity-70">Socials</p>
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
          <p className="row-start-6 sm:row-start-auto -mt-[24px] sm:mt-0">© 2024 All rights reserved</p>
          <a className="row-start-5 sm:row-start-auto" href="#">Terms of Use</a>
          <a className="row-start-5 sm:row-start-auto" href="#">Privacy policy</a>
        </div>
      </div>
    </footer>
  )
}