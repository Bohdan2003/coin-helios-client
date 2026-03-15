'use client';
//hooks
import { useSaveCoinMutation } from '@/features/coins/api/coin/useSaveCoinMutation';
import { useCoinStatusQuery } from '@/features/coins/api/coin/useCoinStatusQuery';
//ui
import { BaseCoinButton } from '@/features/coins/ui/BaseCoinButton';
//icons
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import StarBorderIcon from '@mui/icons-material/StarBorderOutlined';
//types
import { TDictionary } from '@/shared/i18n/dictionaries';
//utils
import { cn } from '@/shared/lib/cn';

export const SaveButton: React.FC<{
  className?: string;
  id: string;
  dictionary: TDictionary['errors'];
}> = ({
  className,
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
  } = useSaveCoinMutation(id);

  return (
    <div className={cn(className)}>
      <BaseCoinButton
        mutate={mutate}
        disabled={isError}
        loading={isMutationPending || isQueryPending}
        Icon={ data?.saved ? StarBorderIcon : StarBorderOutlinedIcon}
        dictionary={dictionary}
      />
    </div>
  );
};