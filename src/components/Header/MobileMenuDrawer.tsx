//ui
import { Drawer, List, ListItem } from '@mui/material';
import { Auth } from '@/components/Header/Auth';
import Link from 'next/link';
//types
import { TNavItem } from '@/components/Header/helper';

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
              <Link href={href}>{text}</Link>
            </ListItem>
          ))
        }
      </List>
    </Drawer>
  );
};