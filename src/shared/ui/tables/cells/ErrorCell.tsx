//ui
import TableCell from '@mui/material/TableCell';
import { ErrorMessage } from '@/shared/ui/messages/ErrorMessage';

type TErrorCellProps = {
  message?: string;
  colsAmount: number;
}

export const ErrorCell: React.FC<TErrorCellProps> = ({
  message,
  colsAmount,
}) =>  (
  <TableCell colSpan={colsAmount}>
    <ErrorMessage message={message}/>
  </TableCell>
);
