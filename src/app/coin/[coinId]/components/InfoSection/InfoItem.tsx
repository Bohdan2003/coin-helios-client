//ui
import { ContextHelp } from '@/ui/ContextHelp';

type InfoItemProps = {
  title: React.ReactNode;
  text: React.ReactNode;
  helpText?: string;
};

export const InfoItem: React.FC<InfoItemProps> = ({
  title,
  text,
  helpText,
}) => {
  return (
    <div className="flex justify-between items-center gap-[20px]">
      <dt className="font-inter font-medium opacity-50 flex items-center gap-[4px]">
        <span>{title}</span>
        {helpText && (
          <ContextHelp text={helpText} ariaLabel={`about ${title}`} />
        )}
      </dt>
      <dd className="font-inter">{text}</dd>
    </div>
  );
};
