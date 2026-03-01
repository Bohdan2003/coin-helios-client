'use client';

//hooks
import { useState } from 'react';
// ui
import { IconButton } from '@mui/material';
import { MobileMenuDrawer } from '@/shared/ui/Header/MobileMenuDrawer';
//icons
import MenuIcon from '@mui/icons-material/Menu';
//types
import { TNavItem } from '@/shared/ui/Header/helper';

export const BurgerMenu: React.FC<{ navItems: TNavItem[] }> = ({ navItems }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <IconButton onClick={() => setOpen(true)}>
        <MenuIcon/>
      </IconButton>

      <MobileMenuDrawer
        navItems={navItems}
        open={open}
        setOpen={setOpen}
      />
    </>
  );
}
