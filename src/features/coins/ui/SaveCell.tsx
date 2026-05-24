'use client';
//hooks
import { useSaveCoinMutation } from '@/features/coins/api/coin/useSaveCoinMutation';
//ui
import TableCell from '@mui/material/TableCell';
import { BaseCoinButton } from '@/features/coins/ui/BaseCoinButton';
//icons
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorderOutlined';
//types
import { TDictionary } from '@/shared/i18n/dictionaries';

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
        Icon={ saved ? StarIcon : StarBorderIcon}
        dictionary={dictionary}
      />
    </TableCell>
  );
};