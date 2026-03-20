//ui
import { LocalizedLink } from '@/shared/ui/links/LocalizedLink';
import { Avatar } from '@mui/material';
//utils
import { ROUTES } from '@/shared/routes';

export const CurrentAccount: React.FC<{
  name: string;
  img: string;
  onClick?: () => void;
}> = ({
  name,
  img,
  onClick
}) => {
  return (
    <LocalizedLink
      href={ROUTES.PROFILE}
      onClick={onClick}
    >
      <Avatar
        alt={name}
        src={img}
      />
    </LocalizedLink>
  );
};
