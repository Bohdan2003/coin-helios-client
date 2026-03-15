//ui
import { LocalizedLink } from '@/shared/ui/links/LocalizedLink';
import { Avatar } from '@mui/material';
//utils
import { ROUTES } from '@/shared/routes';

export const CurrentAccount: React.FC<{
  name: string;
  img: string;
}> = ({ name, img }) => {
  return (
    <LocalizedLink
      href={ROUTES.PROFILE}
    >
      <Avatar
        alt={name}
        src={img}
      />
    </LocalizedLink>
  );
};
