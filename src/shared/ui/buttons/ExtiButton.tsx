'use client';

//hooks
import { useState } from 'react';
//ui
import { IconButton } from '@mui/material';
import { ConfirmationDialog } from '@/shared/ui/modals/ConfirmationDialog';
//icons
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
//types
import { TDictionary } from '@/shared/i18n/dictionaries';

export const ExitButton: React.FC<{
  dictionary: {
    title: string;
    buttons: TDictionary['buttons'];
    error: TDictionary['errors']['error'];
  }
}> = ({ dictionary: d }) => {
  const [ isOpen, setIsOpen ] = useState(false);

  return (
    <>
      <IconButton onClick={() => { setIsOpen(true); }}>
        <ExitToAppIcon color="primary"/>
      </IconButton>
      <ConfirmationDialog
        dictionary={{ buttons: d.buttons, error: d.error }}
        title={ d.title }
        isOpen={ isOpen }
        onClose={() => setIsOpen(false)}
        onConfirm={() => setIsOpen(false)}
      />
    </>
  );
};