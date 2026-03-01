//ui
import { CommunityItem } from '@/app/[lang]/coins/[coinId]/_ui/CommunitySection/CommunityItem';
//icons
import RedditIcon from '@mui/icons-material/Reddit';
import TelegramIcon from '@mui/icons-material/Telegram';
// import YouTubeIcon from '@mui/icons-material/YouTube';
import XIcon from '@mui/icons-material/X';
//types
import { TLocale } from '@/shared/i18n/dictionaries';
//utils
import {
  smallTitleCls,
  sectionBorderCls,
} from '@/shared/classNames';
import { cn } from '@/shared/lib/cn';
import { getDictionary } from '@/shared/i18n/dictionaries';

export const CommunitySection: React.FC<{ lang: TLocale }> = async ({ lang }) => {
  const { coin: { community: d } } = await getDictionary(lang);

  return (
    <section className={cn('p-[16px] rounded-[16px]', sectionBorderCls)}>
      <h3 className={smallTitleCls}>{ d.title }</h3>
      <ul className="mt-[16px] flex flex-wrap gap-[8px]">
        <CommunityItem
          text="Telegram"
          href="https://t.me/testcoin"
          icon={<TelegramIcon />}
        />
        <CommunityItem
          text="Twitter"
          href="https://t.me/testcoin"
          icon={<XIcon />}
        />
        <CommunityItem
          text="Reddit"
          href="https://t.me/testcoin"
          icon={<RedditIcon />}
        />
        <CommunityItem
          text="https://twitter.com/testcoin"
          href="https://twitter.com/testcoin"
        />
      </ul>
    </section>
  );
};