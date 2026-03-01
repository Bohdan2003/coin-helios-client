//ui
import { Chip } from '@mui/material';
//types
import { TLocale } from '@/shared/i18n/dictionaries';
//utils
import { smallTitleCls } from '@/shared/classNames';
import { cn } from '@/shared/lib/cn';
import { getDictionary } from '@/shared/i18n/dictionaries';

export const Category: React.FC<{
  lang: TLocale,
  id: string,
  className?: string
}> = async ({ lang, id, className }) => {
  const { coin: { category: d } } = await getDictionary(lang);

  return (<div className={cn(className)}>
    <h4 className={cn(smallTitleCls, 'ml-[24px]')}>{ d.title }</h4>
    <div className="mt-[16px]">
      <Chip label="Other"/>
    </div>
  </div>);
};