//ui
import Link from 'next/link';
//utils
import { cn } from '@/utils/cn';
//helpers
import { getMenuItems } from '@/components/Header/helper';

export const Menu: React.FC<{ className?: string }> = ({ className }) => {
  const menuItems = getMenuItems();

  return (<nav>
    <ul className={cn(className)}>
      {
        menuItems.map(({ text, href }, i) => (
          <li key={i}><Link href={href}>{text}</Link></li>
        ))
      }
    </ul>
  </nav>);
};