//icons
import EmojiEventsOutlined   from '@mui/icons-material/EmojiEventsOutlined';
import CrownIcon from '@mui/icons-material/WorkspacePremiumOutlined';
import WhatshotIcon from '@mui/icons-material/WhatshotOutlined';
import SouthIcon from '@mui/icons-material/SouthOutlined';
import BarChartIcon from '@mui/icons-material/BarChartOutlined';
import StarBorderIcon from '@mui/icons-material/StarBorderOutlined';
//types
import { TTab } from '@/shared/ui/tabs/BaseTabs';
import { TLocale } from '@/shared/i18n/dictionaries';
//utils
import { getDictionary } from '@/shared/i18n/dictionaries';

export const getFilters = async (lang: TLocale ): Promise<TTab[]> => {
  const { tables: { tabs } } = await getDictionary(lang);

  return [
    { value: 'all',     label: tabs['all'],     icon: <CrownIcon /> },
    { value: 'top',     label: tabs['top'],     icon: <EmojiEventsOutlined /> },
    { value: 'popular', label: tabs['popular'], icon: <WhatshotIcon /> },
    { value: 'new',     label: tabs['new'],     icon: <SouthIcon sx={{ rotate: '180deg' }} /> },
    { value: 'gainers', label: tabs['gainers'], icon: <BarChartIcon /> },
    { value: 'saved',   label: tabs['saved'],   icon: <StarBorderIcon /> },
  ];
};