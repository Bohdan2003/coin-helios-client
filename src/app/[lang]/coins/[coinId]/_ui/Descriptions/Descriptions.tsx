//api
import { getCoin } from '@/features/coins/api/coin/getCoin';
//ui
import { Divider } from '@mui/material';
import { DescriptionItem } from '@/app/[lang]/coins/[coinId]/_ui/Descriptions/DescriptionItem';
//utils
import { cn } from '@/shared/lib/cn';

export const Descriptions: React.FC<{ id: string; className?: string }> = async ({
  id,
  className,
}) => {
  const { descriptions } = await getCoin({ id });

  if(descriptions.length === 0) return;

  return (
    <div className={cn(className)}>
      {descriptions.map(({ title, text }, i) => (
          <>
            {i > 0 && <Divider key={`divider-${i}`} />}
            <DescriptionItem
              key={title}
              title={title}
              text={text}
            />
          </>
        ))
      }
    </div>
  );
};
