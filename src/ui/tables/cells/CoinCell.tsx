import Image from "next/image";
import TableCell from '@mui/material/TableCell';

type TCoinCellProps = {
  icon: string;
  name: string;
  symbol: string;
}

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export const CoinCell: React.FC<TCoinCellProps> = ({
  icon,
  name,
  symbol
}) => {
  return (
    <TableCell>
      <div className="flex gap-[6px] items-center">
        {/*<Image*/}
        {/*  className="rounded-full size-[32px] object-cover object-center"*/}
        {/*  src={`${apiUrl}/${icon}`}*/}
        {/*  alt={name}*/}
        {/*  width={32}*/}
        {/*  height={32}*/}
        {/*/>*/}
        <div className="grid">
          <span>{name}</span>
          <span className="opacity-60">{symbol}</span>
        </div>
      </div>
    </TableCell>
  )
}