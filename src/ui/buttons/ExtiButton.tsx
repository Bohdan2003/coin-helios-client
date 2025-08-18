//hooks
import { useState } from 'react';
//ui
import { IconButton } from '@mui/material';
import { ConfirmationDialog } from '@/ui/dialogs/ConfirmationDialog';
//icons
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

export const ExitButton: React.FC = () => {
  const [ isOpen, setIsOpen ] = useState(false);

  return (
    <>
      <IconButton onClick={() => { setIsOpen(true); }}>
        <ExitToAppIcon color="primary"/>
      </IconButton>
      <ConfirmationDialog
        title="Are you sure you want to exit?"
        isOpen={ isOpen }
        onClose={() => setIsOpen(false)}
        onConfirm={() => setIsOpen(false)}
      />
    </>
  );
};