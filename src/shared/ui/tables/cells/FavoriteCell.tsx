'use client';
//ui
import TableCell from '@mui/material/TableCell';
import { FavoriteCoinButton } from '@/shared/ui/buttons/FavoriteCoinButton';

export const FavoriteCell: React.FC<{id: string}> = ({
  id,
}) => {
  return (
    <TableCell>
      <FavoriteCoinButton id={id}/>
    </TableCell>
  );
};