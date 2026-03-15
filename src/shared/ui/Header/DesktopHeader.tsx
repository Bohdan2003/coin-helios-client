//ui
import { Logo } from '@/shared/ui/Logo';
import { LanguageSwitcher } from '@/shared/ui/switchers/LanguageSwitcher';
import { ThemeSwitcher } from '@/shared/ui/switchers/ThemeSwitcher';
import { DesktopMenu } from '@/shared/ui/Header/DesktopMenu';
import { AccountBar } from '@/features/auth/ui/AccountBar';
//types
import { TNavItem } from '@/shared/ui/Header/helper';

export const DesktopHeader:React.FC<{ navItems: TNavItem[] }> = ({ navItems }) => {
  return (
    <header>
      <div className="container pt-[16px] grid grid-cols-[auto_1fr_auto_1fr_auto] gap-4 items-center">
        <Logo/>
        <div></div>
        <DesktopMenu
          className="flex items-center gap-[32px]"
          navItems={navItems}
        />
        <div className="flex items-center justify-center md:gap-[20px] xl:gap-[60px]">
          <LanguageSwitcher/>
          <ThemeSwitcher/>
        </div>
        <AccountBar/>
      </div>
    </header>
  );
};