//ui
import Image from 'next/image';
import TableCell from '@mui/material/TableCell';
//utils
import { cn } from '@/utils/cn';

type TChainCellProps = {
  icon: string;
  name: string;
  className?: string;
}

export const ChainCell: React.FC<TChainCellProps> = ({
  icon,
  name,
  className,
}) => {
  return (
    <TableCell className={cn(className)}>
      <div className="flex gap-[6px] items-center">
        <Image
          className="rounded-full size-[20px] object-cover object-center"
          src={icon}
          alt={name}
          width={20}
          height={20}
        />
        <span>{name}</span>
      </div>
    </TableCell>
  );
};