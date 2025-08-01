import { cn } from "@/utils/cn";
import TableCell from '@mui/material/TableCell';

export const PercentChangeCell: React.FC<{percent: number}> = ({ percent }) => {
  const isPositive = percent > 0;
  const text = `${isPositive ? '+' : ''}${percent}%`;

  return (
    <TableCell>
      <span
        className={cn(isPositive ? 'text-green' : 'text-orange')}
      >{text}</span>
    </TableCell>
  );
};
