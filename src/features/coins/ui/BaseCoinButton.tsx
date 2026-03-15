//ui
import { IconButton } from '@mui/material';
//types
import { SvgIconComponent } from '@mui/icons-material';
import { TDictionary } from '@/shared/i18n/dictionaries';
import { UseMutateFunction } from '@tanstack/react-query';
//utils
import { toast } from 'react-hot-toast';

export const BaseCoinButton: React.FC<{
  mutate: UseMutateFunction<unknown, Error, void, unknown>;
  loading: boolean;
  disabled?: boolean;
  Icon: SvgIconComponent;
  dictionary: TDictionary['errors'];
}> = ({
  Icon,
  mutate,
  loading,
  disabled,
  dictionary: d
}) => {
  const handleLike = () => {
    mutate(undefined, {
      onError: (error: Error) => {
        if (error.message === 'authRequired') {
          toast.error(d.authRequired);
        } else {
          toast.error(d.error);
        }
      }
    });
  };

  return (
    <IconButton
      onClick={handleLike}
      loading={loading}
      disabled={disabled}
    >
      <Icon/>
    </IconButton>
  );
};