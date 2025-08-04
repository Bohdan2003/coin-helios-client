import { cn } from '@/utils/cn';

export type TBaseTextareaProps = {
  error?: string | null;
  value?: string;
  placeholder?: string;
  fullWidth?: boolean;
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const textareaCls = 'w-full placeholder:[color:inherit] placeholder:opacity-[0.7] placeholder:font-medium outline-none'

export const BaseTextarea: React.FC<TBaseTextareaProps> = ({
  error,
  fullWidth,
  className,
  ...otherProps
}) => {
  return (
    <div className={cn( className, 'font-inter', fullWidth && 'w-full' )}>
      <div className={cn(
        'relative h-full',
        'after:absolute after:left-0 after:right-0 after:bottom-[1px] after:h-[1px] after:bg-blue after:opacity-50',
        'hover:after:opacity-100 after:duration-200 focus-within:after:opacity-100',
        error && 'after:bg-orange'
      )}
      >
        <textarea
          className={cn(
            textareaCls,
            'resize-none py-[12px] px-[10px] h-full',
          )}
          {...otherProps}
        />
      </div>
      {
        error && <p className="text-[14px] text-orange ml-[4px] mt-[4px]">{error}</p>
      }
    </div>
  )
}