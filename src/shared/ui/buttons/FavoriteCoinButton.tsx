'use client';
//ui
import { IconButton } from '@mui/material';
//icons
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
//utils
import { cn } from '@/shared/lib/cn';

type TFavoriteCoinButtonProps = {
  className?: string;
  id: string;
}

export const FavoriteCoinButton: React.FC<TFavoriteCoinButtonProps> = ({
  className,
  id,
}) => {
  return (
    <div className={cn(className)}>
      <IconButton
        onClick={() => { console.log(id); }}
      >
        <StarBorderOutlinedIcon/>
      </IconButton>
    </div>
  );
};