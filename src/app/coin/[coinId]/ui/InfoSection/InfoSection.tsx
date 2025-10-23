//ui
import { InfoItem } from '@/app/coin/[coinId]/ui/InfoSection/InfoItem';
//utils
import {
  smallTitleCls,
  sectionBorderCls
} from '@/shared/lib/classNames';
import { cn } from '@/shared/lib/cn';
import { NumberFormatter } from '@/shared/lib/NumberFormatter';

export const InfoSection: React.FC = () => {
  const getReadablePrice = NumberFormatter.getReadablePrice.bind(NumberFormatter);

  return (
    <section className={cn('p-[16px] rounded-[16px]', sectionBorderCls)}>
      <h3 className={smallTitleCls}>Info</h3>
      <dl className="mt-[16px] grid gap-[16px]">
        <InfoItem
          title="Price to USD"
          text={getReadablePrice( 94668.89 )}
          helpText="Bitcoin is a decentralized digital currency that was introduced in 2009 by an anonymous person or group of people using the pseudonym Satoshi Nakamoto. It allows peer-to-peer transactions with"
        />
        <InfoItem
          title="24h volume"
          text={getReadablePrice( 94668.89 )}
          helpText="Bitcoin is a decentralized digital currency that was introduced in 2009 by an anonymous person or group of people using the pseudonym Satoshi Nakamoto. It allows peer-to-peer transactions with"
        />
        <InfoItem
          title="Market cap"
          text={getReadablePrice( 94668.89 )}
          helpText="Bitcoin is a decentralized digital currency that was introduced in 2009 by an anonymous person or group of people using the pseudonym Satoshi Nakamoto. It allows peer-to-peer transactions with"
        />
        <InfoItem
          title="Volume / Market cap"
          text='0.96'
          helpText="Bitcoin is a decentralized digital currency that was introduced in 2009 by an anonymous person or group of people using the pseudonym Satoshi Nakamoto. It allows peer-to-peer transactions with"
        />
        <InfoItem
          title="Fully diluted market cap"
          text={getReadablePrice( 94668.89 )}
          helpText="Bitcoin is a decentralized digital currency that was introduced in 2009 by an anonymous person or group of people using the pseudonym Satoshi Nakamoto. It allows peer-to-peer transactions with"
        />
        <InfoItem
          title="All-time high"
          text={getReadablePrice( 94668.89 )}
          helpText="Bitcoin is a decentralized digital currency that was introduced in 2009 by an anonymous person or group of people using the pseudonym Satoshi Nakamoto. It allows peer-to-peer transactions with"
        />
      </dl>
    </section>
  );
};