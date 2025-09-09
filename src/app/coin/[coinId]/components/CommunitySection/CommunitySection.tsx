//ui
import { CommunityLink } from '@/app/coin/[coinId]/components/CommunitySection/CommunityLink';
//icons
import RedditIcon from '@mui/icons-material/Reddit';
import TelegramIcon from '@mui/icons-material/Telegram';
// import YouTubeIcon from '@mui/icons-material/YouTube';
import XIcon from '@mui/icons-material/X';
//utils
import {
  smallTitleCls,
  sectionBorderCls,
} from '@/utils/consts/clsVariable';
import { cn } from '@/utils/cn';

export const CommunitySection: React.FC = () => {
  return (
    <section className={cn('p-[16px] rounded-[16px]', sectionBorderCls)}>
      <h3 className={smallTitleCls}>Community</h3>
      <div className="mt-[16px] flex flex-wrap gap-[8px]">
        <CommunityLink
          text="Telegram"
          href="https://t.me/testcoin"
          icon={<TelegramIcon />}
        />
        <CommunityLink
          text="Twitter"
          href="https://t.me/testcoin"
          icon={<XIcon />}
        />
        <CommunityLink
          text="Reddit"
          href="https://t.me/testcoin"
          icon={<RedditIcon />}
        />
        <CommunityLink
          text="https://twitter.com/testcoin"
          href="https://twitter.com/testcoin"
        />
      </div>
    </section>
  );
};