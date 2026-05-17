import Avatar from '@mui/material/Avatar';
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
        <Avatar
          src={`${KEYS.BASE_URL}/minio/${icon}`}
          alt={name}
          sx={{ width: 32, height: 32 }}
        />
        <div className="grid">
          <LocalizedLink href={ROUTES.COIN(id)}>{name}</LocalizedLink>
          <span className="opacity-60">{symbol}</span>
        </div>
      </div>
    </TableCell>
  );
};