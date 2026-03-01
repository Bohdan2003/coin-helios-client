//ui
import { LocalizedLink } from '@/shared/ui/links/LocalizedLink';
import { Button } from '@mui/material';
//types
import { ButtonProps } from '@mui/material';
import { LocalizedLinkProps } from '@/shared/ui/links/LocalizedLink';

type LinkAsButtonProps = ButtonProps & LocalizedLinkProps;

export const LinkAsButton: React.FC<LinkAsButtonProps> = ({
  children,
  ...otherProps
}) => {
  return (<Button
    component={LocalizedLink}
    {...otherProps}
  >
    { children }
  </Button>);
};