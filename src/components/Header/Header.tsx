import { DesktopHeader } from "@/components/Header/DesktopHeader";
import { MobileHeader } from "@/components/Header/MobileHeader";

export const Header: React.FC = () => {

  return (
    <div className="fixed top-0 w-full">
      <div className="hidden md:block">
        <DesktopHeader/>
      </div>
      <div className="block md:hidden">
        <MobileHeader/>
      </div>
    </div>
  );
};