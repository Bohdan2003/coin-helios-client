//ui
import {
  Button,
  Dialog,
} from '@mui/material';

type TConfirmationDialogProps = {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  isLoading?: boolean;
  isError?: boolean;
  title: string;
}

export const ConfirmationDialog: React.FC<TConfirmationDialogProps> = ({
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
          >No</Button>
          <Button
            variant="outlined"
            onClick={onConfirm}
            loading={isLoading}
            disabled={isLoading}
          >Yes</Button>
        </div>
        {
          isError &&
          <p className="mt-[16px] text-orange text-center">
            Something went wrong!
          </p>
        }
      </div>
    </Dialog>
  );
};