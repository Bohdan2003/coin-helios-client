//ui
import { CopyTextField } from '@/ui/fields/CopyTextField';

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
      <dd className="font-inter mt-[6px]">
        <CopyTextField
          className="justify-between"
          textClassName="break-all opacity-50"
          text={text}
        />
      </dd>
    </div>
  );
};
