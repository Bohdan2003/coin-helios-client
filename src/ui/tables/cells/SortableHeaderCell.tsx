'use client';
import TableCell from '@mui/material/TableCell';
import { ArrowIcon } from '@/ui/icons/ArrowIcon';
import type { TSortDir, TSort } from '@/modules/coins/CoinsApi';

type TSortableHeaderCellProps = {
  text: string;
  columnKey: string
  sort: TSort
  onChange: (key : TSort['key'], dir: TSort['dir']) => void
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
  sort,
  onChange,
}) => {
  const isActive = (dir: TSortDir) => sort.key === columnKey && sort.dir === dir

  const handleClick = (dir: TSortDir) => {
    if (isActive(dir)) onChange(null, null);
    else onChange(columnKey, dir);
  };

  return (
    <TableCell>
      <div className="flex items-center gap-1.5">
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
