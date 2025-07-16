import { cn } from "@/utils/cn";
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import Button from '@mui/material/Button';

export const Auth: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <Button
      className={cn(className)}
      variant="outlined"
      startIcon={<PersonOutlineOutlinedIcon/>}
    >Join</Button>
  )
}