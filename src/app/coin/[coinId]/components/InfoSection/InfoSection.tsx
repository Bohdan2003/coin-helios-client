//ui
import { InfoItem } from '@/app/coin/[coinId]/components/InfoSection/InfoItem';
//utils
import { smallTitleCls } from '@/utils/consts/clsVariable';

export const InfoSection: React.FC = () => {
  return (
    <section className="p-[16px] rounded-[16px] border-1 border-[var(--lightGray)] dark:border-[var(--darkGray)]">
      <h3 className={smallTitleCls}>Info</h3>
      <dl className="mt-[16px] grid gap-[16px]">
        <InfoItem
          title="Price to USD"
          text="$94,668.896"
          helpText="Bitcoin is a decentralized digital currency that was introduced in 2009 by an anonymous person or group of people using the pseudonym Satoshi Nakamoto. It allows peer-to-peer transactions with"
        />
        <InfoItem
          title="24h volume"
          text="$94,668.896"
          helpText="Bitcoin is a decentralized digital currency that was introduced in 2009 by an anonymous person or group of people using the pseudonym Satoshi Nakamoto. It allows peer-to-peer transactions with"
        />
        <InfoItem
          title="Market cap"
          text="$94,668.896"
          helpText="Bitcoin is a decentralized digital currency that was introduced in 2009 by an anonymous person or group of people using the pseudonym Satoshi Nakamoto. It allows peer-to-peer transactions with"
        />
        <InfoItem
          title="Volume / Market cap"
          text="$94,668.896"
          helpText="Bitcoin is a decentralized digital currency that was introduced in 2009 by an anonymous person or group of people using the pseudonym Satoshi Nakamoto. It allows peer-to-peer transactions with"
        />
        <InfoItem
          title="Fully diluted market cap"
          text="$94,668.896"
          helpText="Bitcoin is a decentralized digital currency that was introduced in 2009 by an anonymous person or group of people using the pseudonym Satoshi Nakamoto. It allows peer-to-peer transactions with"
        />
        <InfoItem
          title="All-time high"
          text="$94,668.896"
          helpText="Bitcoin is a decentralized digital currency that was introduced in 2009 by an anonymous person or group of people using the pseudonym Satoshi Nakamoto. It allows peer-to-peer transactions with"
        />
      </dl>
    </section>
  );
};