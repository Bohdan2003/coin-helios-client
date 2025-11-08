'use client';
//hooks
import { usePathname, useRouter } from 'next/navigation';
//ui
import { Select, MenuItem, SelectChangeEvent } from '@mui/material';
//icons
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
//types
import { TLocale } from '@/shared/i18n/dictionaries';
import { SelectProps } from '@mui/material/Select';
//utils
import { locales } from '@/shared/i18n/dictionaries';

export const LanguageSwitcher: React.FC<{ sx?: SelectProps['sx'] }> = ({ sx }) => {
  const pathname = usePathname();
  const router = useRouter();

  const currentLang = pathname.split('/')[1];
  const isValidLang = locales.includes(currentLang as TLocale);
  const lang = isValidLang ? currentLang : 'en';

  const handleSwitchLocale = (e: SelectChangeEvent) => {
    const newLang = e.target.value;
    const pathWithoutLang = isValidLang ? pathname.replace(`/${currentLang}`, '') : pathname;
    const newPath = `/${newLang}${pathWithoutLang}`;
    router.replace(newPath);
  };

  return (
    <Select
      value={lang}
      onChange={handleSwitchLocale}
      IconComponent={ExpandMoreIcon}
      variant="standard"
      disableUnderline
      sx={{ textTransform: 'uppercase', ...sx }}
    >
      {
        locales.map((language, index) => (
          <MenuItem
            value={language}
            key={index}
            sx={{ textTransform: 'uppercase' }}
          >{language}</MenuItem>
        ))
      }
    </Select>
  );
};