'use client';
//hooks
import { useSaveCoinMutation } from '@/features/coins/api/coin/useSaveCoinMutation';
//ui
import TableCell from '@mui/material/TableCell';
import { BaseCoinButton } from '@/features/coins/ui/BaseCoinButton';
//icons
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import StarBorderIcon from '@mui/icons-material/StarBorderOutlined';
//types
import { TDictionary } from '@/shared/i18n/dictionaries';
//utils
import { toast } from 'react-hot-toast';

export const SaveCell: React.FC<{
  id: string;
  saved: boolean;
  dictionary: TDictionary['errors'];
}> = ({
  id,
  saved,
  dictionary
}) => {
  const {
    mutate,
    isPending
  } = useSaveCoinMutation(id);

  return (
    <TableCell>
      <BaseCoinButton
        mutate={mutate}
        loading={isPending}
        Icon={ saved ? StarBorderIcon : StarBorderOutlinedIcon}
        dictionary={dictionary}
      />
    </TableCell>
  );
};