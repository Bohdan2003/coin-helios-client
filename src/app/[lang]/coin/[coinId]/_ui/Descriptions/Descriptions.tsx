//ui
import { Divider } from '@mui/material';
import { DescriptionSection } from '@/app/[lang]/coin/[coinId]/_ui/Descriptions/DescriptionSection';
//utils
import { cn } from '@/shared/lib/cn';

export const Descriptions: React.FC<{ id: string, className?: string }> = ({
  id,
  className
}) => {
  return (
    <div className={cn(className)}>
      <DescriptionSection
        title="Description"
        text="Bitcoin is a decentralized digital currency that was introduced in 2009 by an anonymous person or group of people using the pseudonym Satoshi Nakamoto. It allows peer-to-peer transactions without the need for intermediaries like banks. Key features of Bitcoin include: Decentralization: Bitcoin operates on a peer-to-peer network, meaning there’s no central authority governing it. Blockchain Technology: Transactions are recorded on a public ledger called the blockchain, which ensures transparency and security. Limited Supply: There will only ever be 21 million bitcoins, making it a deflationary asset. Mining: New bitcoins are created through a process called mining, where powerful computers solve complex mathematical problems to validate transactions. Bitcoin has gained popularity as both a digital currency and an investment asset, sparking debates about its use, security, and environmental impact."
      />
      <Divider/>
      <DescriptionSection
        title="Description"
        text="Bitcoin is a decentralized digital currency that was introduced in 2009 by an anonymous person or group of people using the pseudonym Satoshi Nakamoto. It allows peer-to-peer transactions without the need for intermediaries like banks. Key features of Bitcoin include: Decentralization: Bitcoin operates on a peer-to-peer network, meaning there’s no central authority governing it. Blockchain Technology: Transactions are recorded on a public ledger called the blockchain, which ensures transparency and security. Limited Supply: There will only ever be 21 million bitcoins, making it a deflationary asset. Mining: New bitcoins are created through a process called mining, where powerful computers solve complex mathematical problems to validate transactions. Bitcoin has gained popularity as both a digital currency and an investment asset, sparking debates about its use, security, and environmental impact."
      />
    </div>
  );
};