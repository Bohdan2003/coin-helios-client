//ui
import { StickyHeedTable } from '@/ui/tables/StickyHeedTable';
import TableRow from '@mui/material/TableRow';
import { HeaderCell } from '@/ui/tables/cells/HeaderCell';
import { StatusCell } from '@/ui/tables/cells/StatusCell';
import { CoinCell } from '@/ui/tables/cells/CoinCell';
import TableCell from '@mui/material/TableCell';
//helpers
import { getPromotionsData } from '@/app/profile/components/helper';

const tableColsAmount = 8;
const firstColSx = {
  position: 'sticky',
  zIndex: 10,
  left: 0,
};

export const PromotionsTable = () => {
  const rows = getPromotionsData();

  return (
    <div className="max-h-[60vh] md:max-h-none overflow-scroll md:overflow-visible">
      <StickyHeedTable
        rowsAmount={20}
        colsAmount={tableColsAmount}
        isPending={false}
        isError={false}
        head={
          <TableRow>
            <HeaderCell text="Type"/>
            <HeaderCell
              text="Coin"
              sx={{ ...firstColSx, backgroundColor: 'var(--palette-background-paper)' }}
            />
            <HeaderCell text="Start"/>
            <HeaderCell text="Finish"/>
            <HeaderCell
              text="Link usage"
              align="center"
            />
            <HeaderCell
              text="Status"
              align="center"
            />
          </TableRow>
        }
        body={
          !rows || rows?.length < 1
            ?
            <TableRow>
              <StatusCell
                text="No matched"
                colsAmount={tableColsAmount}
              />
            </TableRow>
            :
            rows?.map(row => (
              <TableRow key={row.id}>
                <TableCell>{row.type}</TableCell>
                <CoinCell
                  sx={{ ...firstColSx, backgroundColor: 'var(--palette-background-default)' }}
                  id={row.id}
                  icon={row.icon}
                  name={row.name}
                  symbol={row.symbol}
                />
                <TableCell>---</TableCell>
                <TableCell>---</TableCell>
                <TableCell align="center">{row.link_usage}</TableCell>
                <TableCell align="center">{row.status}</TableCell>
              </TableRow>
            ))
        }
      />
    </div>
  );
};