'use client';
//ui
import { FieldWrapper } from '@/ui/fields/FieldWrapper';
import {
  Select,
  MenuItem
} from '@mui/material';
//icons
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
//types
import { SelectChangeEvent } from '@mui/material/Select';
import { TFieldWrapperPropsWithoutChildren } from '@/ui/fields/FieldWrapper';

export type TBaseSelectProps = {
  placeholder?: string;
  options?: string[];
  onChange: (e: SelectChangeEvent<string>) => void;
} & TFieldWrapperPropsWithoutChildren;

export const BaseSelect: React.FC<TBaseSelectProps> = ({
  label,
  error,
  className,
  variant,
  icon,
  fullWidth,
  required,
  placeholder,
  onChange,
  options = ['USDT', 'EUR'],
  ...otherProps
}) => {

  return (
    <FieldWrapper
      className={className}
      variant={variant}
      error={error}
      fullWidth={fullWidth}
      label={label}
      required={required}
      icon={icon}
    >
      <Select
        IconComponent={ExpandMoreIcon}
        variant="standard"
        disableUnderline
        fullWidth={fullWidth}
        displayEmpty
        onChange={onChange}
        sx={{
          '& .MuiSelect-select': {
            py: '10px',
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
    </FieldWrapper>
  );
};