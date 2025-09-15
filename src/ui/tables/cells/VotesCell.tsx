'use client';
//ui
import TableCell from '@mui/material/TableCell';
//utils
import { LikeCoinButton } from '@/ui/buttons/LikeCoinButton';

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
      <LikeCoinButton votes={votes} id={id} />
    </TableCell>
  );
};