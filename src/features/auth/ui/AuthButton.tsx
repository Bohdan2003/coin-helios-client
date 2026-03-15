'use client';
//hooks
import { usePathname } from 'next/navigation';
//ui
import { LinkAsButton } from '@/shared/ui/links/LinkAsButton';
//icons
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
//utils
import { cn } from '@/shared/lib/cn';
import { ROUTES } from '@/shared/routes';

export const AuthButton: React.FC<{ className?: string }> = ({ className }) => {
  const pathname = usePathname();

  const handleClick = () =>
    localStorage.setItem('returnTo', pathname);

  return (
    <LinkAsButton
      className={cn(className)}
      href={ROUTES.AUTH}
      variant="outlined"
      startIcon={<PersonOutlineOutlinedIcon/>}
      onClick={handleClick}
    >Join</LinkAsButton>
  );
};