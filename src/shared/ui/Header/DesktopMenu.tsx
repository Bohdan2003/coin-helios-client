//ui
import { LocalizedLink } from '@/shared/ui/links/LocalizedLink';
//utils
import { cn } from '@/shared/lib/cn';
//helpers
import { getNavItems } from '@/shared/ui/Header/helper';

export const DesktopMenu: React.FC<{ className?: string }> = ({ className }) => {
  const navItems = getNavItems();

  return (<nav>
    <ul className={cn(className)}>
      {
        navItems.map(({ text, href }, i) => (
          <li key={i}>
            <LocalizedLink href={href}>{text}</LocalizedLink>
          </li>
        ))
      }
    </ul>
  </nav>);
};