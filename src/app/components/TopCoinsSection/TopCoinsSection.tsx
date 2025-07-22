//ui
import Image from "next/image"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { FormattedPercent } from "@/ui/FormattedPercent";
//icons
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
//types
import type { TCoin } from "@/utils/types/coin";
//helper
import { getTopCoinsData } from "@/app/components/TopCoinsSection/helper";

type TTopCoin = TCoin;

export const TopCoinsSection: React.FC = () => {
  const rows: TTopCoin[] = getTopCoinsData();

  return (
    <section>
      <h3 className="font-medium text-[20px] pl-[16px]">Top Coins</h3>
      <TableContainer
        className="mt-[16px]"
        component={Paper}
        sx={{
          '& .MuiTableHead-root .MuiTableCell-root': {
            paddingBottom: '6px'
          },
        }}
      >
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Coin</TableCell>
              <TableCell>24H</TableCell>
              <TableCell>Chain</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Votes</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, i) => (
              <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell>{i + 1}</TableCell>
                <TableCell>
                  <div className="flex gap-[6px] items-center">
                    <Image
                      className="rounded-full size-[32px] object-cover object-center"
                      src={row.icon}
                      alt={row.name}
                      width={32}
                      height={32}
                    />
                    <div className="grid">
                      <span>{row.name}</span>
                      <span className="opacity-60">{row.symbol}</span>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <FormattedPercent value={row.percent_change_24h}/>
                </TableCell>
                <TableCell>
                  <div className="flex gap-[6px] items-center">
                    <Image
                      className="rounded-full size-[20px] object-cover object-center"
                      src={row.icon}
                      alt={row.chain.name}
                      width={20}
                      height={20}
                    />
                    <span>{row.chain.name}</span>
                  </div>
                </TableCell>
                <TableCell className="opacity-80">${row.price}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-[6px]">
                    <button
                      className="cursor-pointer"
                    ><ThumbUpOutlinedIcon/></button>
                    <span>{row.votes}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <button
                    className="cursor-pointer"
                  ><StarBorderOutlinedIcon/></button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </section>
  );
}
