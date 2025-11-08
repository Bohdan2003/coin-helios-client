//ui
import { LocalizedLink } from '@/shared/ui/links/LocalizedLink';
//icons
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
//utils
import { cn } from '@/shared/lib/cn';

type TBaseLinkProps = {
  className?: string;
  href: string;
  children: string;
}

export const LinkWithArrow: React.FC<TBaseLinkProps> = ({
  className,
  href,
  children,
}) => (
  <LocalizedLink
    className={cn(
      'text-blue font-medium',
      'flex items-center gap-[6px]',
      className
    )}
    href={href}
  >
    { children }
    <ArrowBackIosNewIcon
      className="rotate-180"
      color="primary"
      fontSize="small"
    />
  </LocalizedLink>
);