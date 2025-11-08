//ui
import { Skeleton } from '@mui/material';

export const CoinsFilterSectionSkeleton: React.FC = () => {
  return (
    <div>
      <p className="text-[14px] font-medium opacity-60">
        <Skeleton variant="rounded" width={64} height={16} />
      </p>
      <div className="mt-[12px] flex gap-[6px] flex-wrap">
        <Skeleton variant="rounded" width={64} height={32} />
        <Skeleton variant="rounded" width={64} height={32} />
        <Skeleton variant="rounded" width={64} height={32} />
        <Skeleton variant="rounded" width={64} height={32} />
        <Skeleton variant="rounded" width={64} height={32} />
      </div>
    </div>
  );
};