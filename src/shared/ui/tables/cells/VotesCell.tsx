'use client';
//ui
import TableCell from '@mui/material/TableCell';
//utils
import { LikeButton } from '@/features/coins/ui/LikeButton';

type TVotesCellProps = {
  className?: string;
  votes: number;
  id: string;
}

export const VotesCell: React.FC<TVotesCellProps> = ({
  className,
  votes,
  id,
}) => {
  return (
    <TableCell className={className}>
      <LikeButton votes={votes} id={id} />
    </TableCell>
  );
};