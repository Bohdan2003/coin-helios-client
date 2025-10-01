'use client';
//ui
import TableCell from '@mui/material/TableCell';
//utils
import { LikeCoinButton } from '@/ui/buttons/LikeCoinButton';

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
      <LikeCoinButton votes={votes} id={id} />
    </TableCell>
  );
};