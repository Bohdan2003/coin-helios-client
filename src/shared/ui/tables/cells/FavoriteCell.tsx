'use client';
//ui
import TableCell from '@mui/material/TableCell';
import { FavoriteButton } from '@/features/coins/ui/FavoriteButton';

export const FavoriteCell: React.FC<{id: string}> = ({
  id,
}) => {
  return (
    <TableCell>
      <FavoriteButton id={id}/>
    </TableCell>
  );
};