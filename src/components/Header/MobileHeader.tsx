//ui
import { Logo } from '@/ui/Logo';
import { LanguageSwitcher } from '@/ui/LanguageSwitcher';
import { ThemeSwitcher } from '@/ui/ThemeSwitcher';
//components
import { BurgerMenu } from '@/components/Header/BurgerMenu';

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