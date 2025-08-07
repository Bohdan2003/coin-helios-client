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
import StarBorderIcon from '@mui/icons-material/StarBorder';
import MenuIcon from '@mui/icons-material/Menu';

export function BurgerMenu() {
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
        {/*<List sx={{ width: 260 }}>*/}
        {/*  {NAV.map(({ label, href }) => (*/}
        {/*    <ListItemButton*/}
        {/*      key={href}*/}
        {/*      component={Link}*/}
        {/*      href={href}*/}
        {/*      onClick={() => setOpen(false)}*/}
        {/*    >*/}
        {/*      <ListItemText primary={label} />*/}
        {/*    </ListItemButton>*/}
        {/*  ))}*/}
        {/*</List>*/}


        <List sx={{ width: 260 }}>
          <ListItem>
            <Auth className="w-full"/>
          </ListItem>
          <ListItemButton
            onClick={() => setOpen(false)}
          >
            Coins
          </ListItemButton>
          <ListItemButton
            onClick={() => setOpen(false)}
          >
            Become a Partner
          </ListItemButton>
          <ListItemButton
            onClick={() => setOpen(false)}
          >
            News
          </ListItemButton>
          <ListItemButton
            onClick={() => setOpen(false)}
          >
            FAQ
          </ListItemButton><ListItemButton
            onClick={() => setOpen(false)}
          >
            <StarBorderIcon/>
          </ListItemButton>
        </List>
      </Drawer>
    </>
  );
}
