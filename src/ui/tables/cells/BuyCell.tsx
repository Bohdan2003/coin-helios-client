'use client'
import { useTheme } from "@mui/material/styles";
import TableCell from '@mui/material/TableCell';
import Button from "@mui/material/Button";

export const BuyCell: React.FC<{ id: string }> = ({
  id,
}) => {
  const theme = useTheme();

  return (
    <TableCell>
      <Button
        variant="contained"
        color={theme.palette.mode === 'light' ? 'secondary' : 'primary'}
        size="small"
        onClick={() => {console.log(id)}}
      >
        Buy
      </Button>
    </TableCell>
  )
}