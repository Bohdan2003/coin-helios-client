'use client';
//hooks
import { useLikeCoinMutation } from '@/features/coins/api/coin/useLikeCoinMutation';
//ui
import TableCell from '@mui/material/TableCell';
import { BaseCoinButton } from '@/features/coins/ui/BaseCoinButton';
//icons
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
//types
import { TDictionary } from '@/shared/i18n/dictionaries';

export const LikeCell: React.FC<{
  className?: string;
  liked: boolean;
  votes: number;
  id: string;
  dictionary: TDictionary['errors'];
}> = ({
  className,
  liked,
  votes,
  id,
  dictionary
}) => {
  const {
    mutate,
    isPending
  } = useLikeCoinMutation(id);

  return (
    <TableCell className={className}>
      <div className="flex items-center gap-[6px]">
        <BaseCoinButton
          mutate={mutate}
          loading={isPending}
          Icon={ liked ? ThumbUpIcon : ThumbUpOutlinedIcon }
          dictionary={dictionary}
        />
        <span>{votes}</span>
      </div>
    </TableCell>
  );
};