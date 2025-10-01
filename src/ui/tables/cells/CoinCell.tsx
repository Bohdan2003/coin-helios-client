// import Image from 'next/image';
import Link from 'next/link';
import TableCell from '@mui/material/TableCell';
//types
import type { SxProps, Theme } from '@mui/material/styles';
//utils
import { KEYS } from '@/utils/consts/keys';
import { ROUTES } from '@/utils/routes';

type TCoinCellProps = {
  icon: string;
  id: string;
  name: string;
  symbol: string;
  sx?: SxProps<Theme>;
}

export const CoinCell: React.FC<TCoinCellProps> = ({
  icon,
  id,
  name,
  symbol,
  sx
}) => {
  return (
    <TableCell sx={sx}>
      <div className="flex gap-[6px] items-center">
        {/*<Image*/}
        {/*  className="size-[32px] object-cover object-center"*/}
        {/*  src={`${KEYS.API_URL}/${icon}`}*/}
        {/*  alt={name}*/}
        {/*  width={32}*/}
        {/*  height={32}*/}
        {/*/>*/}
        <div className="grid">
          <Link href={ROUTES.COIN(id)}>{name}</Link>
          <span className="opacity-60">{symbol}</span>
        </div>
      </div>
    </TableCell>
  );
};