//icons
import PollOutlinedIcon from '@mui/icons-material/PollOutlined';
import WhatshotIcon from '@mui/icons-material/WhatshotOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
//types
import { TLocale } from '@/shared/i18n/dictionaries';
///utils
import { getDictionary } from '@/shared/i18n/dictionaries';

export const getProfileTabs = async (lang: TLocale) => {
  const { profile: { tabs: d } } = await getDictionary(lang);

  return [
    { value: 'promotions', label: d.promotions, icon: <PollOutlinedIcon /> },
    { value: 'my-coins', label: d.myCoins, icon: <WhatshotIcon /> },
    { value: 'alerts', label: d.alerts, icon: <NotificationsOutlinedIcon/> },
  ];
}