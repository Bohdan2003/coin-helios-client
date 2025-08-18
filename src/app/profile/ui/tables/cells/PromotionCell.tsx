//hooks
import { useColorScheme } from '@mui/material';
import { useState } from 'react';
//ui
import { Button } from '@mui/material';
import TableCell from '@mui/material/TableCell';
import { PromotionFormDialog } from '@/app/profile/ui/dialogs/PromotionFormDialog';

export const PromotionCell: React.FC<{id: string}> = ({ id }) => {
  const { mode } = useColorScheme();
  const [ isOpen, setIsOpen ] = useState(false);

  return (
    <TableCell>
      <Button
        variant="contained"
        color={mode === 'light' ? 'secondary' : 'primary'}
        onClick={() => setIsOpen(true)}
        size="small"
      >Promote</Button>
      <PromotionFormDialog
        id={id}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </TableCell>
  );
};