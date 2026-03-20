'use client';
//ui
import { LinkAsButton } from '@/shared/ui/links/LinkAsButton';
//icons
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
//utils
import { cn } from '@/shared/lib/cn';
import { ROUTES } from '@/shared/routes';

export const AuthButton: React.FC<{
  className?: string;
  onClick?: () => void;
}> = ({
  className,
  onClick
}) => {
  return (
    <LinkAsButton
      className={cn(className)}
      href={ROUTES.AUTH}
      variant="outlined"
      startIcon={<PersonOutlineOutlinedIcon/>}
      onClick={onClick}
    >Join</LinkAsButton>
  );
};