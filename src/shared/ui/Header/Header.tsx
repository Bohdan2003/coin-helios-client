import { DesktopHeader } from '@/shared/ui/Header/DesktopHeader';
import { MobileHeader } from '@/shared/ui/Header/MobileHeader';

export const Header: React.FC = () => {

  return (
    <>
      <div className="hidden md:block">
        <DesktopHeader/>
      </div>
      <div className="block md:hidden">
        <MobileHeader/>
      </div>
    </>
  );
};