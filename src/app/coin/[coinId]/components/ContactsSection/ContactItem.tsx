//ui
import { CopyableText } from '@/ui/CopyableText';

type ContactItemProps = {
  title: string;
  text: string;
};

export const ContactItem: React.FC<ContactItemProps> = ({
  title,
  text,
}) => {
  return (
    <div>
      <dt className="font-inter flex items-center gap-[4px]">
        { title }
      </dt>
      <dd className="font-inter">
        <CopyableText
          className="justify-between"
          textClassName="break-all opacity-50"
          text={text}
        />
      </dd>
    </div>
  );
};
