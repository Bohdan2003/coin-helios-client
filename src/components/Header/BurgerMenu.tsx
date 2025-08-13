'use client';
//hooks
import { useState } from 'react';
// ui
import { IconButton } from '@mui/material';
import { MobileMenu } from '@/components/Header/MobileMenu';
//icons
import MenuIcon from '@mui/icons-material/Menu';
//helpers
import { getNavItems } from '@/components/Header/helper';


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

      <MobileMenu
        open={open}
        setOpen={setOpen}
        navItems={navItems}
      />
    </>
  );
}
