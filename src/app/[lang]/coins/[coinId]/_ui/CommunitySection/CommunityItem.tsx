//ui
import { Chip } from '@mui/material';

type TCommunityLinkProps = {
  text: string;
  href: string;
  icon?: React.ReactElement;
}

export const CommunityItem: React.FC<TCommunityLinkProps> = ({
  text,
  href,
  icon,
}) => {
  return (
    <li>
      <Chip
        label={text}
        icon={icon || undefined}
        component="a"
        href={href}
        clickable
        sx={{
          backgroundColor: 'color-mix(in srgb, var(--palette-primary-main) 20%, transparent)',
          '&:hover': {
            backgroundColor: 'color-mix(in srgb, var(--palette-primary-main) 30%, transparent)',
          },
          '& .MuiTouchRipple-root .MuiTouchRipple-child': {
            backgroundColor: 'var(--palette-primary-main)',
          },
        }}
      />
    </li>
  );
};