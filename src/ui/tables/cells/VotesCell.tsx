'use client';
//ui
import { IconButton } from '@mui/material';
import TableCell from '@mui/material/TableCell';
//icons
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';

type TVotesCellProps = {
  votes: number;
  id: string;
}

export const VotesCell: React.FC<TVotesCellProps> = ({
  votes,
  id,
}) => {
  return (
    <TableCell>
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