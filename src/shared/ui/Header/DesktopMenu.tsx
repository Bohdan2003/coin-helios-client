//ui
import { LocalizedLink } from '@/shared/ui/links/LocalizedLink';
//types
import { TNavItem } from '@/shared/ui/Header/helper';
//utils
import { cn } from '@/shared/lib/cn';

export const DesktopMenu: React.FC<{
  className?: string;
  navItems: TNavItem[]
}> = async ({ className, navItems }) => {

  return (<nav>
    <ul className={cn(className)}>
      {
        navItems.map(({ text, href }, i) => (
          <li key={i}>
            <LocalizedLink href={href}>
              { text }
            </LocalizedLink>
          </li>
        ))
      }
    </ul>
  </nav>);
};