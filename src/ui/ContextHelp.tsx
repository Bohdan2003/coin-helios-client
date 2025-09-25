'use client';
//hooks
import { useState } from 'react';
//ui
import { Popover } from '@mui/material';
import IconButton from '@mui/material/IconButton';
//icons
import HelpOutlineRoundedIcon from '@mui/icons-material/HelpOutlineRounded';

type InfoPopoverProps = {
  text: string;
};

export const ContextHelp: React.FC<InfoPopoverProps> = ({ text }) => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const isOpen = Boolean(anchorEl);

  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        size="small"
        onClick={handlePopoverOpen}
      >
        <HelpOutlineRoundedIcon fontSize="small" className="opacity-60" />
      </IconButton>

      <Popover
        open={isOpen}
        anchorEl={anchorEl}
        onClose={handlePopoverClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'left' }}
        slotProps={{
          paper: {
            sx: {
              boxShadow: 'none',
              backgroundColor: 'var(--lightGray-200, #E6EAEE)',
              '[data-dark] &': {
                backgroundColor: 'var(--darkGray, #2B2F36)',
              },
            },
          }
        }}
      >
        <div className="p-[12px] flex gap-[8px]">
          <div className="text-blue size-[24px] grid place-content-center rounded-full border-1 border-blue">
            ?
          </div>
          <p className="text-[12px] font-inter max-w-[240px]">
            {text}
          </p>
        </div>
      </Popover>
    </>
  );
}
