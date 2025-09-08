'use client';
//hooks
import { useState } from 'react';
//icons
import CheckIcon from '@mui/icons-material/Check';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
//utils
import { cn } from '@/utils/cn';

type TCopyTextFieldProps = {
  text: string;
  textClassName?: string;
  className?: string;
}

export const CopyTextField: React.FC<TCopyTextFieldProps> = ({
  text,
  textClassName,
  className
}) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);

      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Something went wrong: ', error);
    }
  };

  return (
    <div className={cn(
      'flex gap-[8px] items-center',
      className
    )}>
      <span className={cn(textClassName)}>{text}</span>
      {
        copied
          ? <CheckIcon/>
          :
          <button
            className="cursor-pointer"
            onClick={handleCopy}
          >
            <ContentCopyIcon/>
          </button>
      }
    </div>
  );
};