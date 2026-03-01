//icons
import CircularProgress from '@mui/material/CircularProgress';

export default function Loading(){
  return <CircularProgress
    className="absolute top-1/3 left-1/2 -translate-1/2"
    size={40}
  />;
}