//icons
import EmojiEventsOutlined   from '@mui/icons-material/EmojiEventsOutlined';
import CrownIcon from '@mui/icons-material/WorkspacePremiumOutlined';
// import AirlineStopsIcon from '@mui/icons-material/AirlineStops';
import WhatshotIcon from '@mui/icons-material/WhatshotOutlined';
import SouthIcon from '@mui/icons-material/SouthOutlined';
import BarChartIcon from '@mui/icons-material/BarChartOutlined';
import StarBorderIcon from '@mui/icons-material/StarBorderOutlined';

export const getCategories = () => [
  { value: 'all',     label: 'All',     icon: <CrownIcon /> },
  { value: 'top',     label: 'Top',     icon: <EmojiEventsOutlined /> },
  { value: 'popular', label: 'Popular', icon: <WhatshotIcon /> },
  { value: 'new',     label: 'New',     icon: <SouthIcon sx={{ rotate: '180deg' }} /> },
  { value: 'gainers', label: 'Gainers', icon: <BarChartIcon /> },
  { value: 'saved',   label: 'Saved',   icon: <StarBorderIcon /> },
];