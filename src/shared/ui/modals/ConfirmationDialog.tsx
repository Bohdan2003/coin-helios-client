//ui
import {
  Button,
  Dialog,
} from '@mui/material';
//types
import { TDictionary } from '@/shared/i18n/dictionaries';

export const ConfirmationDialog: React.FC<{
  dictionary: {
    buttons: TDictionary['buttons'];
    error: TDictionary['errors']['error'];
  }
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  isLoading?: boolean;
  isError?: boolean;
  title: string;
}> = ({
  dictionary: d,
  isOpen,
  onClose,
  onConfirm,
  isLoading,
  isError,
  title,
}) => {
  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
    >
      <div className="p-[16px]">
        <p>{title}</p>
        <div className="mt-[16px] flex gap-[16px] justify-center">
          <Button
            variant="contained"
            onClick={onClose}
          >{ d.buttons.no }</Button>
          <Button
            variant="outlined"
            onClick={onConfirm}
            loading={isLoading}
            disabled={isLoading}
          >{ d.buttons.yes }</Button>
        </div>
        {
          isError &&
          <p className="mt-[16px] text-orange text-center">
            { d.error }
          </p>
        }
      </div>
    </Dialog>
  );
};