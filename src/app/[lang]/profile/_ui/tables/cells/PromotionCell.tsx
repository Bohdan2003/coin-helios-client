//hooks
import { useColorScheme } from '@mui/material';
import { useState } from 'react';
//types
import { TDictionary } from '@/shared/i18n/dictionaries';
//ui
import { Button } from '@mui/material';
import TableCell from '@mui/material/TableCell';
import { PromotionFormDialog } from '@/app/[lang]/profile/_ui/dialogs/PromotionFormDialog';

export const PromotionCell: React.FC<{
  dictionary: {
    buttons: TDictionary['buttons'];
    link: TDictionary['links']['privacyPolicy'];
    form: TDictionary['forms']['contact'];
    errors: TDictionary['forms']['errors'];
  };
  id: string;
}> = ({ id, dictionary: d }) => {
  const { mode } = useColorScheme();
  const [ isOpen, setIsOpen ] = useState(false);

  return (
    <TableCell>
      <Button
        variant="contained"
        color={mode === 'light' ? 'secondary' : 'primary'}
        onClick={() => setIsOpen(true)}
        size="small"
      >{ d.buttons.promote }</Button>
      <PromotionFormDialog
        id={id}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        dictionary={d}
      />
    </TableCell>
  );
};