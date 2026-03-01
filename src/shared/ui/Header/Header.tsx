//ui
import { DesktopHeader } from '@/shared/ui/Header/DesktopHeader';
import { MobileHeader } from '@/shared/ui/Header/MobileHeader';
//types
import { TLocale } from '@/shared/i18n/dictionaries';
//helper
import { getNavItems } from '@/shared/ui/Header/helper';

export const Header: React.FC<{ lang: TLocale }> = async ({ lang }) => {
  const navItems = await getNavItems(lang);

  return (
    <>
      <div className="hidden md:block">
        <DesktopHeader navItems={navItems}/>
      </div>
      <div className="block md:hidden">
        <MobileHeader navItems={navItems}/>
      </div>
    </>
  );
};