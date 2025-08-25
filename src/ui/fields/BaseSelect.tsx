'use client';
//ui
import {
  Select,
  MenuItem
} from '@mui/material';
//icons
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
//utils
import { cn } from '@/utils/cn';
import {
  fieldLabelCls,
  fieldBottomBorderCls,
  fieldErrorCls,
} from '@/utils/consts/clsVariable';

export type TBaseSelectProps = {
  className?: string;
  label?: string;
  error?: string | null;
  fullWidth?: boolean;
  required?: boolean;
  placeholder?: string;
}

const options = ['BTC1', 'BTC2', 'BTC3'];

export const BaseSelect: React.FC<TBaseSelectProps> = ({
  label,
  error,
  className,
  fullWidth,
  required,
  placeholder,
  ...otherProps
}) => {

  return (
    <div className={cn( className, 'font-inter', fullWidth && 'w-full' )}>
      <div className={cn(
        'relative',
        fieldBottomBorderCls,
        error && 'after:bg-orange'
      )}
      >
        {
          label &&
          <p className={fieldLabelCls}>
            {label}{required && <span className="text-orange">*</span>}
          </p>
        }
        <Select
          IconComponent={ExpandMoreIcon}
          variant="standard"
          disableUnderline
          fullWidth={fullWidth}
          displayEmpty
          sx={{
            '& .MuiSelect-select': {
              py: '10.5px',
              px: '10px',
            },
            '& .MuiSelect-icon': {
              opacity: 0.5,
            },
          }}
          renderValue={(selected: string) => {
            if (!selected && placeholder) {
              return <span className="opacity-50 font-inter select-text">{placeholder}</span>;
            }
            return selected;
          }}
          {...otherProps}
        >
          {
            options.map((option, index) => (
              <MenuItem
                value={option}
                key={index}
              >{option}</MenuItem>
            ))
          }
        </Select>
      </div>
      {
        error && <p className={fieldErrorCls}>{error}</p>
      }
    </div>
  );
};