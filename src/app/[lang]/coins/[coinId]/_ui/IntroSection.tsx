//ui
import { Avatar } from '@mui/material';
import { SaveButton } from '@/features/coins/ui/SaveButton';
import { LikeButton } from '@/features/coins/ui/LikeButton';
//types
import { TLocale } from '@/shared/i18n/dictionaries';
//utils
import { getDictionary } from '@/shared/i18n/dictionaries';
import { getCoin } from '@/features/coins/api/coin/getCoin';
import { cn } from '@/shared/lib/cn';
import { KEYS } from '@/shared/config/keys';

export const IntroSection: React.FC<{
  lang: TLocale,
  id: string,
  className?: string
}> = async ({
  lang,
  id,
  className
}) => {
  const { errors } = await getDictionary(lang);
  const data = await getCoin({ id });

  return (
    <section className={cn(
      'flex justify-between',
      className
    )}>
      <div className="flex items-center gap-[20px]">
        <Avatar
          src={`${KEYS.BASE_URL}/minio/${data.icon}`}
          alt={data.name}
          sx={{ width: { xs: 60, md: 80 }, height: { xs: 60, md: 80 } }}
        />
        <div className="flex gap-[6px]">
          <div className="text-[26px] md:text-[32px]">
            <h1>{ data.name }</h1>
            <h2 className="opacity-50">{ data.symbol }</h2>
          </div>
          <SaveButton
            dictionary={errors}
            id={id}
          />
        </div>
      </div>
      <LikeButton
        dictionary={errors}
        id={id}
      />
    </section>
  );
};