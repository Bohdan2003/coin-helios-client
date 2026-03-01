//ui
import { Logo } from '@/shared/ui/Logo';
import { LanguageSwitcher } from '@/shared/ui/switchers/LanguageSwitcher';
import { ThemeSwitcher } from '@/shared/ui/switchers/ThemeSwitcher';
import { BurgerMenu } from '@/shared/ui/Header/BurgerMenu';
//types
import { TNavItem } from '@/shared/ui/Header/helper';

export const MobileHeader: React.FC<{ navItems: TNavItem[] }> = ({ navItems }) => {

  return (
    <header>
      <div className="container pt-[16px] flex gap-[40px] justify-between">
        <div className="flex gap-[20px] items-center">
          <BurgerMenu navItems={navItems}/>
          <Logo/>
        </div>
        <div className="flex gap-[20px] items-center">
          <LanguageSwitcher/>
          <ThemeSwitcher/>
        </div>
      </div>
    </header>
  );
};