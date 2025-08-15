//hooks
import { useColorScheme } from '@mui/material';
//ui
import { StickyHeedTable } from '@/ui/tables/StickyHeedTable';
import TableRow from '@mui/material/TableRow';
import { HeaderCell } from '@/ui/tables/cells/HeaderCell';
import { StatusCell } from '@/ui/tables/cells/StatusCell';
import { CoinCell } from '@/ui/tables/cells/CoinCell';
import TableCell from '@mui/material/TableCell';
import { Button } from '@mui/material';
//helpers
import { getMyCoinsData } from '@/app/profile/ui/helper';

const tableColsAmount = 8;
const firstColSx = {
  position: 'sticky',
  zIndex: 10,
  left: 0,
};

export const MyCoinsTable = () => {
  const rows = getMyCoinsData();
  const { mode } = useColorScheme();

  return (
    <StickyHeedTable
      rowsAmount={20}
      colsAmount={tableColsAmount}
      isPending={false}
      isError={false}
      sx={{
        '& thead th:last-child, & tbody td:last-child': {
          maxWidth: 70,
        },
      }}
      head={
        <TableRow>
          <HeaderCell
            text="Coin"
            sx={{ ...firstColSx, backgroundColor: 'var(--palette-background-paper)' }}
          />
          <HeaderCell text="Views (all time)"/>
          <HeaderCell text="Views (7days)"/>
          <HeaderCell text="Likes"/>
          <HeaderCell text="Promotion"/>
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
              <TableCell>{row.views_all}</TableCell>
              <TableCell>{row.views_7d}</TableCell>
              <TableCell>{row.likes}</TableCell>
              <TableCell>{row.promotion}</TableCell>
              <TableCell>---</TableCell>
              <TableCell>---</TableCell>
              <TableCell>
                <Button
                  variant="contained"
                  color={mode === 'light' ? 'secondary' : 'primary'}
                  size="small"
                >Promote</Button>
              </TableCell>
            </TableRow>
          ))
      }
    />
  );
};