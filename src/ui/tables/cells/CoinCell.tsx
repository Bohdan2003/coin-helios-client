// import Image from 'next/image';
import Link from 'next/link';
import TableCell from '@mui/material/TableCell';
//types
import type { SxProps, Theme } from '@mui/material/styles';
//utils
import { ROUTES } from '@/utils/router';

type TCoinCellProps = {
  icon: string;
  id: string;
  name: string;
  symbol: string;
  sx?: SxProps<Theme>;
}

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

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
        {/*  className="rounded-full size-[32px] object-cover object-center"*/}
        {/*  src={`${apiUrl}/${icon}`}*/}
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