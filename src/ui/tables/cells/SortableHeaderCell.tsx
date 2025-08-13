'use client';
//ui
import TableCell from '@mui/material/TableCell';
//icons
import { ArrowIcon } from '@/ui/icons/ArrowIcon';
//types
import type { TSortDir, TSortKey } from '@/modules/coins/CoinsApi';
//utils
import { cn } from '@/utils/cn';

type TSortableHeaderCellProps = {
  text: string;
  isLoading: boolean;
  columnKey: string;
  sortKey: TSortKey;
  sortDir: TSortDir;
  onChange: (key: TSortKey, dir: TSortDir) => void;
}

const ArrowButton = ({
  dir,
  active,
  onClick,
}: {
  dir: TSortDir
  active: boolean
  onClick: () => void
}) => (
  <button
    className={dir === 'asc' ? 'rotate-180 cursor-pointer' : 'cursor-pointer'}
    onClick={onClick}
  >
    <ArrowIcon active={active} />
  </button>
);

export const SortableHeaderCell: React.FC<TSortableHeaderCellProps> = ({
  text,
  columnKey,
  sortKey,
  sortDir,
  isLoading,
  onChange,
}) => {
  const isActive = (dir: TSortDir) => sortKey === columnKey && sortDir === dir;

  const handleClick = (dir: TSortDir) => {
    if (isActive(dir))
      onChange(null, null);
    else
      onChange(columnKey, dir);
  };

  return (
    <TableCell>
      <div className={cn(
        'opacity-60',
        isLoading && 'pointer-events-none opacity-40',
        'flex items-center gap-1.5'
      )}>
        <div className="grid gap-1.5">
          <ArrowButton
            dir="asc"
            active={isActive('asc')}
            onClick={() => handleClick('asc')}
          />
          <ArrowButton
            dir="desc"
            active={isActive('desc')}
            onClick={() => handleClick('desc')}
          />
        </div>
        <span>{text}</span>
      </div>
    </TableCell>
  );
};
