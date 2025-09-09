'use client';
//hooks
import { useState } from 'react';
//ui
import { Popover } from '@mui/material';
//icons
import HelpOutlineRoundedIcon from '@mui/icons-material/HelpOutlineRounded';
import IconButton from '@mui/material/IconButton';

type InfoPopoverProps = {
  text: string;
  ariaLabel: string;
};

export const ContextHelp: React.FC<InfoPopoverProps> = ({ text, ariaLabel }) => {
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
        aria-label={ariaLabel}
        aria-describedby={isOpen ? 'info-popover' : undefined}
        aria-haspopup="true"
        size="small"
        onClick={handlePopoverOpen}
      >
        <HelpOutlineRoundedIcon fontSize="small" />
      </IconButton>

      <Popover
        id="info-popover"
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
