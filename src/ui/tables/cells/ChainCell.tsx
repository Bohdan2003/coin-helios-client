import Image from 'next/image';
import TableCell from '@mui/material/TableCell';

type TChainCellProps = {
  icon: string;
  name: string;
}

export const ChainCell: React.FC<TChainCellProps> = ({
  icon,
  name
}) => {
  return (
    <TableCell>
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