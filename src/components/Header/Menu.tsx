//ui
import Link from 'next/link';
//utils
import { cn } from '@/utils/cn';
//helpers
import { getNavItems } from '@/components/Header/helper';

export const Menu: React.FC<{ className?: string }> = ({ className }) => {
  const navItems = getNavItems();

  return (<nav>
    <ul className={cn(className)}>
      {
        navItems.map(({ text, href }, i) => (
          <li key={i}><Link href={href}>{text}</Link></li>
        ))
      }
    </ul>
  </nav>);
};