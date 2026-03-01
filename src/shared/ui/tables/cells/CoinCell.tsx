// import Image from 'next/image';
import { LocalizedLink } from '@/shared/ui/links/LocalizedLink';
import TableCell from '@mui/material/TableCell';
//types
import type { SxProps, Theme } from '@mui/material/styles';
//utils
import { KEYS } from '@/shared/config/keys';
import { ROUTES } from '@/shared/routes';

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
          <LocalizedLink href={ROUTES.COIN(id)}>{name}</LocalizedLink>
          <span className="opacity-60">{symbol}</span>
        </div>
      </div>
    </TableCell>
  );
};