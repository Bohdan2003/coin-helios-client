//ui
import { Logo } from '@/shared/ui/Logo';
import { LanguageSwitcher } from '@/shared/ui/switchers/LanguageSwitcher';
import { ThemeSwitcher } from '@/shared/ui/switchers/ThemeSwitcher';
//components
import { BurgerMenu } from '@/widgets/Header/BurgerMenu';

export const MobileHeader: React.FC = () => {
  return (
    <header>
      <div className="container pt-[16px] flex gap-[40px] justify-between">
        <div className="flex gap-[20px] items-center">
          <BurgerMenu/>
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