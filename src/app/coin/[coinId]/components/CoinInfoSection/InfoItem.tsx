//ui
import { ContextHelp } from '@/ui/ContextHelp';

type InfoItemProps = {
  label: React.ReactNode;
  value: React.ReactNode;
  helpText?: string;
};

export const InfoItem: React.FC<InfoItemProps> = ({
  label,
  value,
  helpText,
}) => {
  return (
    <div className="flex justify-between items-center gap-[20px]">
      <dt className="font-inter font-medium opacity-50 flex items-center gap-[4px]">
        <span>{label}</span>
        {helpText && (
          <ContextHelp text={helpText} ariaLabel={`about ${label}`} />
        )}
      </dt>
      <dd className="font-inter">{value}</dd>
    </div>
  );
};
