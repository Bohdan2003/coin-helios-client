//ui
import Link from 'next/link';
//utils
import { cn } from '@/shared/lib/cn';
//helpers
import { getNavItems } from '@/widgets/Header/helper';

export const DesktopMenu: React.FC<{ className?: string }> = ({ className }) => {
  const navItems = getNavItems();

  return (<nav>
    <ul className={cn(className)}>
      {
        navItems.map(({ text, href }, i) => (
          <li key={i}>
            <Link href={href}>{text}</Link>
          </li>
        ))
      }
    </ul>
  </nav>);
};