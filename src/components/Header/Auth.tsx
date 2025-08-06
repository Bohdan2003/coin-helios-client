//ui
import Button from '@mui/material/Button';
//icons
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
//utils
import { cn } from '@/utils/cn';

export const Auth: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <Button
      className={cn(className)}
      variant="outlined"
      startIcon={<PersonOutlineOutlinedIcon/>}
    >Join</Button>
  );
};