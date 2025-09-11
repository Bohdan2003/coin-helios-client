import TableCell from '@mui/material/TableCell';
import { PercentChange } from '@/ui/PercentChange';

export const PercentChangeCell: React.FC<{ percent: number }> = ({ percent }) => {
  return (
    <TableCell>
      <PercentChange percent={percent}/>
    </TableCell>
  );
};
