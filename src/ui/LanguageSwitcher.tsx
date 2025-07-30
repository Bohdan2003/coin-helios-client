'use client'
//hooks
import { useState } from 'react';
//ui
import { Select, MenuItem, SelectChangeEvent } from '@mui/material';
import { SvgIcon } from '@mui/material'
//icons
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
//types
import type { SelectProps } from '@mui/material/Select';

const LANGS = ['UA', 'EN', 'RU'] as const;

//TODO: remove comment

// const ArrowIcon: React.FC<SvgIconProps> = (props) => (
//   <SvgIcon {...props} viewBox="0 0 16 16" fontSize="inherit">
//     <g transform="translate(2 4.5)">
//       <path
//         d="M1.71586 0.999979L6.0088 5.29288L10.3017 0.999979C10.3261 0.975559 10.3524 0.954199 10.3801 0.935889C10.5742 0.807749 10.8379 0.829109 11.0088 0.999979C11.0332 1.02438 11.0545 1.05068 11.0728 1.07838C11.201 1.27248 11.1796 1.53618 11.0088 1.70708L6.3623 6.35348C6.2685 6.44728 6.1414 6.49998 6.0088 6.49998C5.8761 6.49998 5.749 6.44728 5.6552 6.35348L1.00875 1.70708C0.81349 1.51178 0.81349 1.19518 1.00875 0.999979C1.09212 0.916589 1.19762 0.868818 1.30634 0.856638C1.32493 0.854558 1.34362 0.853518 1.36231 0.853518C1.49027 0.853518 1.61823 0.902329 1.71586 0.999979Z"
//       />
//     </g>
//   </SvgIcon>
// )

export const LanguageSwitcher: React.FC = () => {
  const [selectedLanguage, setLanguage] = useState('UA');

  const handleChange = (event: SelectChangeEvent) => {
    setLanguage(event.target.value);
  };

  return (
    <Select
      value={selectedLanguage}
      onChange={handleChange}
      IconComponent={ExpandMoreIcon}
      variant="standard"
      disableUnderline
    >
      {
        LANGS.map((language, index) => (
          <MenuItem
            value={language}
            key={index}
          >{language}</MenuItem>
        ))
      }
    </Select>
  );
}