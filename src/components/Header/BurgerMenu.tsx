'use client';
//hooks
import { useState } from 'react';
// ui
import {
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItem,
} from '@mui/material';
// components
import { Auth } from '@/components/Header/Auth';
//icons
import MenuIcon from '@mui/icons-material/Menu';
//helpers
import { getNavItems } from '@/components/Header/helper';
import Link from 'next/link';

export function BurgerMenu() {
  const navItems = getNavItems();
  const [open, setOpen] = useState(false);

  return (
    <>
      <IconButton
        aria-label="menu"
        onClick={() => setOpen(true)}
      >
        <MenuIcon/>
      </IconButton>

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
    </>
  );
}
