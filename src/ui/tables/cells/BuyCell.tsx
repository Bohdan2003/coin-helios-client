'use client';
//hooks
import { useColorScheme } from '@mui/material';
//ui
import TableCell from '@mui/material/TableCell';
import Button from '@mui/material/Button';

export const BuyCell: React.FC<{ onClick: () => void }> = ({
  onClick
}) => {
  const { mode } = useColorScheme();

  return (
    <TableCell>
      <Button
        variant="contained"
        color={mode === 'light' ? 'secondary' : 'primary'}
        size="small"
        onClick={onClick}
      >
        Buy
      </Button>
    </TableCell>
  );
};