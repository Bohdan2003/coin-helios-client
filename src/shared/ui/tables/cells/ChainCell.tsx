//ui
import Avatar from '@mui/material/Avatar';
import TableCell from '@mui/material/TableCell';
//utils
import { cn } from '@/shared/lib/cn';
import { KEYS } from '@/shared/config/keys';

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
        <Avatar
          src={`${KEYS.BASE_URL}/minio/${icon}`}
          alt={name}
          sx={{ width: 20, height: 20 }}
        />
        <span>{name}</span>
      </div>
    </TableCell>
  );
};