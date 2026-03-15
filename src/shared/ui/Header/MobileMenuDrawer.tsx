//ui
import {
  Drawer,
  List,
  ListItem
} from '@mui/material';
import { AccountBar } from '@/features/auth/ui/AccountBar';
import { LocalizedLink } from '@/shared/ui/links/LocalizedLink';
//types
import { TNavItem } from '@/shared/ui/Header/helper';

type TMobileMenuProps = {
  navItems: TNavItem[];
  open: boolean;
  setOpen: (open: boolean) => void;
}

export const MobileMenuDrawer: React.FC<TMobileMenuProps> = ({
  navItems,
  open,
  setOpen
}) => {

  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={() => setOpen(false)}
    >
      <List sx={{ width: 260 }}>
        <ListItem onClick={() => setOpen(false)}>
          <AccountBar/>
        </ListItem>
        {
          navItems.map(({ text, href }, i) => (
            <ListItem
              key={i}
              onClick={() => setOpen(false)}
            >
              <LocalizedLink href={href}>{ text }</LocalizedLink>
            </ListItem>
          ))
        }
      </List>
    </Drawer>
  );
};