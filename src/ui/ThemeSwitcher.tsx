'use client';
//hooks
import { useColorScheme } from '@mui/material';
//ui
import { IconButton } from '@mui/material';
//icons
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import NightlightOutlinedIcon from '@mui/icons-material/NightlightOutlined';
//types
import type { IconProps } from '@mui/material';

export const ThemeSwitcher: React.FC<{ sx?: IconProps['sx'] }> = ({ sx }) => {
  const { mode, setMode } = useColorScheme();

  const handleClick = () => {
    setMode(mode === 'light' ? 'dark' : 'light');
  };

  return (
    <IconButton onClick={handleClick}>
      <LightModeOutlinedIcon
        sx={{
          display: 'block',
          '[data-dark] &': {
            display: 'none',
          },
          ...sx
        }}
      />
      <NightlightOutlinedIcon
        sx={{
          display: 'none',
          '[data-dark] &': {
            display: 'block',
          },
          ...sx
        }}
      />
    </IconButton>
  );
};
