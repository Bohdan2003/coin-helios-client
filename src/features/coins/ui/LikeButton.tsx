'use client';
//ui
import { IconButton } from '@mui/material';
//icons
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';

type TLikeCoinButtonProps = {
  id: string;
  votes: number;
}

export const LikeButton: React.FC<TLikeCoinButtonProps> = ({
  id,
  votes,
}) => {
  return (
    <div className="flex items-center gap-[6px]">
      <IconButton
        onClick={() => { console.log(id); }}
      >
        <ThumbUpOutlinedIcon/>
      </IconButton>
      <span>{votes}</span>
    </div>
  );
};