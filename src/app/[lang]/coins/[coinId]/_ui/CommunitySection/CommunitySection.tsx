//api
import { getCoin } from '@/features/coins/api/coin/getCoin';
//ui
import { CommunityItem } from '@/app/[lang]/coins/[coinId]/_ui/CommunitySection/CommunityItem';
//icons
import RedditIcon from '@mui/icons-material/Reddit';
import TelegramIcon from '@mui/icons-material/Telegram';
import XIcon from '@mui/icons-material/X';
import LanguageIcon from '@mui/icons-material/Language';
import LinkIcon from '@mui/icons-material/Link';
import EmailIcon from '@mui/icons-material/Email';
//types
import { TLocale } from '@/shared/i18n/dictionaries';
//utils
import {
  smallTitleCls,
  sectionBorderCls,
} from '@/shared/classNames';
import { cn } from '@/shared/lib/cn';
import { getDictionary } from '@/shared/i18n/dictionaries';

export const CommunitySection: React.FC<{ id: string; lang: TLocale }> = async ({ id, lang }) => {
  const { coin: { community: d }, errors } = await getDictionary(lang);
  const { community } = await getCoin({ id });

  const links = [
    { href: community.telegram,                  text: 'Telegram',         icon: <TelegramIcon /> },
    { href: community.telegram_contact,           text: 'Telegram Contact', icon: <TelegramIcon /> },
    { href: community.twitter,                    text: 'Twitter',          icon: <XIcon /> },
    { href: community.reddit,                     text: 'Reddit',           icon: <RedditIcon /> },
    { href: community.discord,                    text: 'Discord',          icon: undefined },
    { href: community.website,                    text: 'Website',          icon: <LanguageIcon /> },
    { href: community.other_links,                text: 'Other',            icon: <LinkIcon /> },
    {
      href: community.email_for_communication
        ? `mailto:${community.email_for_communication}`
        : undefined,
      text: 'Email',
      icon: <EmailIcon />,
    },
  ].filter((l): l is { href: string; text: string; icon: React.ReactElement | undefined } => !!l.href);

  return (
    <section className={cn('p-[16px] rounded-[16px]', sectionBorderCls)}>
      <h3 className={smallTitleCls}>{ d.title }</h3>
      <ul className="mt-[16px] flex flex-wrap gap-[8px]">
        {links.length > 0
          ? links.map(({ href, text, icon }) => (
              <CommunityItem
                key={href}
                text={text}
                href={href}
                icon={icon}
              />
            ))
          : <span className="opacity-70">{errors.noData}</span>
        }
      </ul>
    </section>
  );
};
