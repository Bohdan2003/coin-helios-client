'use client';
//hooks
import { useState } from 'react';
//ui
import { Select, MenuItem, SelectChangeEvent } from '@mui/material';
//icons
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
//types
import type { SelectProps } from '@mui/material/Select';

const languages = ['UA', 'EN', 'RU'];

export const LanguageSwitcher: React.FC<{ sx?: SelectProps['sx'] }> = ({ sx }) => {
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
      sx={sx}
    >
      {
        languages.map((language, index) => (
          <MenuItem
            value={language}
            key={index}
          >{language}</MenuItem>
        ))
      }
    </Select>
  );
};