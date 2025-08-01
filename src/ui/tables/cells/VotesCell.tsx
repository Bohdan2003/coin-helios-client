'use client'
import TableCell from '@mui/material/TableCell';
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";

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
        <button
          className="cursor-pointer"
          onClick={() => {console.log(id)}}
        ><ThumbUpOutlinedIcon/></button>
        <span>{votes}</span>
      </div>
    </TableCell>
  )
}