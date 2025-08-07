import TableCell from '@mui/material/TableCell';

type TStatusCellProps = {
  text: string;
  colsAmount: number;
}

export const StatusCell: React.FC<TStatusCellProps> = ({
  text,
  colsAmount,
}) => (
  <TableCell
    colSpan={colsAmount}
    sx={{
      textAlign: 'center',
      py: 4,
      opacity: 0.5
    }}
  >
    { text }
  </TableCell>
);