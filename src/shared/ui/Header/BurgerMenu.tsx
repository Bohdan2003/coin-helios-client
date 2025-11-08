'use client';
//hooks
import { useState } from 'react';
// ui
import { IconButton } from '@mui/material';
import { MobileMenuDrawer } from '@/shared/ui/Header/MobileMenuDrawer';
//icons
import MenuIcon from '@mui/icons-material/Menu';
//helpers
import { getNavItems } from '@/shared/ui/Header/helper';


export function BurgerMenu() {
  const navItems = getNavItems();
  const [open, setOpen] = useState(false);

  return (
    <>
      <IconButton onClick={() => setOpen(true)}>
        <MenuIcon/>
      </IconButton>

      <MobileMenuDrawer
        open={open}
        setOpen={setOpen}
        navItems={navItems}
      />
    </>
  );
}
