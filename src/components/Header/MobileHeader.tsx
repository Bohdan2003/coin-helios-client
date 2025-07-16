import {BurgerMenu} from "@/components/Header/BurgerMenu";
import {Logo} from "@/ui/Logo";
import {LanguageSwitcher} from "@/ui/LanguageSwitcher";
import {ThemeSwitcher} from "@/ui/ThemeSwitcher";

export const MobileHeader: React.FC = () => {
  return (
    <header>
      <div className="container py-[16px] flex gap-[40px] justify-between">
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
  )
}