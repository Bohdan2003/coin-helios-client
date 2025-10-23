//ui
import TableCell from '@mui/material/TableCell';
import { StatusMessage } from '@/shared/ui/messages/StatusMessage';

type TStatusCellProps = {
  message: string;
  colsAmount: number;
}

export const StatusCell: React.FC<TStatusCellProps> = ({
  message,
  colsAmount,
}) =>  (
  <TableCell colSpan={colsAmount}>
    <StatusMessage message={message}/>
  </TableCell>
);