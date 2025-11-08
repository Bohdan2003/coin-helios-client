//icons
import PollOutlinedIcon from '@mui/icons-material/PollOutlined';
import WhatshotIcon from '@mui/icons-material/WhatshotOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';

export const getProfileTabs = () => [
  { value: 'promotions', label: 'Promotions', icon: <PollOutlinedIcon /> },
  { value: 'my-coins', label: 'My coins', icon: <WhatshotIcon /> },
  { value: 'alerts', label: 'Alerts', icon: <NotificationsOutlinedIcon/> },
];