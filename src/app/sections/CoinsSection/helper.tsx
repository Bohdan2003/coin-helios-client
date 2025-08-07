//icons
import EmojiEventsOutlined   from '@mui/icons-material/EmojiEventsOutlined'
import CrownIcon from '@mui/icons-material/WorkspacePremiumOutlined'
// import AirlineStopsIcon from '@mui/icons-material/AirlineStops';
import WhatshotIcon from '@mui/icons-material/WhatshotOutlined'
import SouthIcon from '@mui/icons-material/SouthOutlined'
import BarChartIcon from '@mui/icons-material/BarChartOutlined'
import StarBorderIcon from '@mui/icons-material/StarBorderOutlined'

export const getCategories = () => [
  { key: 'all',     label: 'All',     icon: <CrownIcon /> },
  { key: 'top',     label: 'Top',     icon: <EmojiEventsOutlined /> },
  { key: 'popular', label: 'Popular', icon: <WhatshotIcon /> },
  { key: 'new',     label: 'New',     icon: <SouthIcon sx={{ rotate: '180deg' }} /> },
  { key: 'gainers', label: 'Gainers', icon: <BarChartIcon /> },
  { key: 'saved',   label: 'Saved',   icon: <StarBorderIcon /> },
];