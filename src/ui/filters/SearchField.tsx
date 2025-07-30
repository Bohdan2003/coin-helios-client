//hooks
import { useState, useMemo } from "react";
//icons
import SearchIcon from '@mui/icons-material/Search';
//utils
import { cn } from "@/utils/cn";
import { debounce } from "@/utils/debounce";

type TSearchFieldProps = {
  className?: string;
  label: string;
  setSearch: (search: string) => void;
}

export const SearchField: React.FC<TSearchFieldProps> = ({
  className,
  label,
  setSearch,
}) => {
  const [value, setValue] = useState<string>('');
  const debouncedSetSearch = useMemo(
    () => debounce((value: string) => {
      setSearch(value)
    }, 400),
    [setSearch]
  )

  return (
    <label className={cn(
      className,
      'flex gap-[6px] items-start relative',
      'pb-[10px] px-[12px]',
      'after:absolute after:left-0 after:right-0 after:bottom-[1px] after:h-[1px] after:bg-blue',
      'after:opacity-50 hover:after:opacity-100 after:duration-200 focus-within:after:opacity-100',
    )}>
      <SearchIcon color="primary"/>
      <input
        className="placeholder:[color:inherit] placeholder:opacity-[0.8] placeholder:font-medium outline-none"
        type="text"
        placeholder={label}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          debouncedSetSearch(e.target.value);
        }}
      />
    </label>
  )
}