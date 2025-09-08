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
          label="Price to USD"
          value="$94,668.896"
          helpText="Bitcoin is a decentralized digital currency that was introduced in 2009 by an anonymous person or group of people using the pseudonym Satoshi Nakamoto. It allows peer-to-peer transactions with"
        />
        <InfoItem
          label="24h volume"
          value="$94,668.896"
          helpText="Bitcoin is a decentralized digital currency that was introduced in 2009 by an anonymous person or group of people using the pseudonym Satoshi Nakamoto. It allows peer-to-peer transactions with"
        />
        <InfoItem
          label="Market cap"
          value="$94,668.896"
          helpText="Bitcoin is a decentralized digital currency that was introduced in 2009 by an anonymous person or group of people using the pseudonym Satoshi Nakamoto. It allows peer-to-peer transactions with"
        />
        <InfoItem
          label="Volume / Market cap"
          value="$94,668.896"
          helpText="Bitcoin is a decentralized digital currency that was introduced in 2009 by an anonymous person or group of people using the pseudonym Satoshi Nakamoto. It allows peer-to-peer transactions with"
        />
        <InfoItem
          label="Fully diluted market cap"
          value="$94,668.896"
          helpText="Bitcoin is a decentralized digital currency that was introduced in 2009 by an anonymous person or group of people using the pseudonym Satoshi Nakamoto. It allows peer-to-peer transactions with"
        />
        <InfoItem
          label="All-time high"
          value="$94,668.896"
          helpText="Bitcoin is a decentralized digital currency that was introduced in 2009 by an anonymous person or group of people using the pseudonym Satoshi Nakamoto. It allows peer-to-peer transactions with"
        />
      </dl>
    </section>
  );
};