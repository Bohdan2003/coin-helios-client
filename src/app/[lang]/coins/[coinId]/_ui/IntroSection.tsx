//ui
import { SaveButton } from '@/features/coins/ui/SaveButton';
import { LikeButton } from '@/features/coins/ui/LikeButton';
//types
import { TLocale } from '@/shared/i18n/dictionaries';
//utils
import { getDictionary } from '@/shared/i18n/dictionaries';
import { getCoin } from '@/features/coins/api/coin/getCoin';
import { cn } from '@/shared/lib/cn';

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
  console.log(data);

  return (
    <section className={cn(
      'flex justify-between',
      className
    )}>
      <div className="flex">
        <div className="text-[32px]">
          <h1>{ data.name }</h1>
          <h2 className="opacity-50">{ data.symbol }</h2>
        </div>
        <SaveButton
          dictionary={errors}
          className="ml-[12px]"
          id={id}
        />
      </div>
      <LikeButton
        dictionary={errors}
        id={id}
      />
    </section>
  );
};