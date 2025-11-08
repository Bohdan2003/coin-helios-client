//ui
import {
  Drawer,
  List,
  ListItem
} from '@mui/material';
import { Auth } from '@/shared/ui/Header/Auth';
import { LocalizedLink } from '@/shared/ui/links/LocalizedLink';
//types
import { TNavItem } from '@/shared/ui/Header/helper';

type TMobileMenuProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
  navItems: TNavItem[]
}

export const MobileMenuDrawer: React.FC<TMobileMenuProps> = ({
  open,
  setOpen,
  navItems,
}) => {
  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={() => setOpen(false)}
    >
      <List sx={{ width: 260 }}>
        <ListItem onClick={() => setOpen(false)}>
          <Auth className="w-full"/>
        </ListItem>
        {
          navItems.map(({ text, href }, i) => (
            <ListItem
              key={i}
              onClick={() => setOpen(false)}
            >
              <LocalizedLink href={href}>{text}</LocalizedLink>
            </ListItem>
          ))
        }
      </List>
    </Drawer>
  );
};