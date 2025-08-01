//hooks
import { useState, useMemo } from "react";
//ui
import { BaseTextField } from "@/ui/fields/BaseTextField";
//icons
import SearchIcon from '@mui/icons-material/Search';
//utils
import { debounce } from "@/utils/debounce";
//types
import { TBaseTextFieldProps } from "@/ui/fields/BaseTextField";

type TSearchFieldProps = {
  className?: string;
  onChange: (search: string) => void;
} & Omit<TBaseTextFieldProps, 'onChange'>;

export const SearchField: React.FC<TSearchFieldProps> = ({
  onChange,
  ...otherProps
}) => {
  const [value, setValue] = useState<string>('');
  const debouncedSetSearch = useMemo(
    () => debounce((value: string) => {
      onChange(value)
    }, 400),
    [onChange]
  )

  return (
    <BaseTextField
      icon={<SearchIcon color="primary"/>}
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
        debouncedSetSearch(e.target.value);
      }}
      {...otherProps}
    />
  )
}