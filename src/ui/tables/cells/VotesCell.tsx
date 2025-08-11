'use client';
//ui
import { IconButton } from '@mui/material';
import TableCell from '@mui/material/TableCell';
//icons
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
//utils
import { cn } from '@/utils/cn';

type TVotesCellProps = {
  votes: number;
  id: string;
  className?: string;
}

export const VotesCell: React.FC<TVotesCellProps> = ({
  votes,
  id,
  className,
}) => {
  return (
    <TableCell className={cn(
      className,
      'opacity-80'
    )}>
      <div className="flex items-center gap-[6px]">
        <IconButton
          onClick={() => { console.log(id); }}
        >
          <ThumbUpOutlinedIcon/>
        </IconButton>
        <span>{votes}</span>
      </div>
    </TableCell>
  );
};