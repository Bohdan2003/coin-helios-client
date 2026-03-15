'use client';
//hooks
import { useLikeCoinMutation } from '@/features/coins/api/coin/useLikeCoinMutation';
import { useCoinStatusQuery } from '@/features/coins/api/coin/useCoinStatusQuery';
//ui
import { BaseCoinButton } from '@/features/coins/ui/BaseCoinButton';
//icons
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
//types
import { TDictionary } from '@/shared/i18n/dictionaries';

export const LikeButton: React.FC<{
  id: string;
  dictionary: TDictionary['errors'];
}> = ({
  id,
  dictionary
}) => {
  const {
    data,
    isError,
    isPending: isQueryPending
  } = useCoinStatusQuery(id);
  const {
    mutate,
    isPending: isMutationPending
  } = useLikeCoinMutation(id);

  return (
    <div className="flex items-center gap-[6px]">
      <BaseCoinButton
        mutate={mutate}
        disabled={isError}
        loading={isMutationPending || isQueryPending}
        Icon={ data?.liked ? ThumbUpIcon : ThumbUpOutlinedIcon}
        dictionary={dictionary}
      />
      <span>{0}</span>
    </div>
  );
};