//ui
import { StickyHeedTable } from '@/shared/ui/tables/StickyHeedTable';
import TableRow from '@mui/material/TableRow';
import { HeaderCell } from '@/shared/ui/tables/cells/HeaderCell';
import { StatusCell } from '@/shared/ui/tables/cells/StatusCell';
import { CoinCell } from '@/shared/ui/tables/cells/CoinCell';
import TableCell from '@mui/material/TableCell';
import { PromotionCell } from '@/app/[lang]/profile/_ui/tables/cells/PromotionCell';
//helpers
import { getMyCoinsData } from '@/app/[lang]/profile/_ui/helper';

const tableColsAmount = 8;
const firstColSx = {
  position: 'sticky',
  maxWidth: {
    xs: '80px',
    sm: '300px',
  },
  zIndex: 10,
  left: 0,
};

export const MyCoinsTable = () => {
  const rows = getMyCoinsData();

  return (
    <div className="max-h-[60vh] md:max-h-none overflow-scroll md:overflow-visible">
      <StickyHeedTable
        rowsAmount={20}
        colsAmount={tableColsAmount}
        isPending={false}
        isError={false}
        sx={{
          '& thead th:last-child, & tbody td:last-child': {
            maxWidth: {
              xs: 'auto',
              md: 70
            },
          },
        }}
        head={
          <TableRow>
            <HeaderCell
              text="Coin"
              sx={{ ...firstColSx, backgroundColor: 'var(--palette-background-paper)' }}
            />
            <HeaderCell
              text="Views (all time)"
              align="center"
            />
            <HeaderCell
              text="Views (7days)"
              align="center"
            />
            <HeaderCell
              text="Likes"
              align="center"
            />
            <HeaderCell
              text="Promotion"
              align="center"
            />
            <HeaderCell text="Start"/>
            <HeaderCell text="Finish"/>
            <HeaderCell text="Promote" hidden/>
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
                <CoinCell
                  sx={{ ...firstColSx, backgroundColor: 'var(--palette-background-default)' }}
                  id={row.id}
                  icon={row.icon}
                  name={row.name}
                  symbol={row.symbol}
                />
                <TableCell align="center">{row.views_all}</TableCell>
                <TableCell align="center">{row.views_7d}</TableCell>
                <TableCell align="center">{row.likes}</TableCell>
                <TableCell align="center">{row.promotion}</TableCell>
                <TableCell>---</TableCell>
                <TableCell>---</TableCell>
                <PromotionCell id={row.id}/>
              </TableRow>
            ))
        }
      />
    </div>
  );
};