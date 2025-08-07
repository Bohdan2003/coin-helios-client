'use client';
//ui
import { IconButton } from '@mui/material';
import TableCell from '@mui/material/TableCell';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';

export const FavoriteCell: React.FC<{id: string}> = ({
  id,
}) => {
  return (
    <TableCell>
      <IconButton
        onClick={() => { console.log(id); }}
      >
        <StarBorderOutlinedIcon/>
      </IconButton>
    </TableCell>
  );
};