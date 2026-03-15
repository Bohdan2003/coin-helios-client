//hooks
import { usePromotionsQuery } from '@/features/profile/api/promotions/usePromotionsQuery';
//ui
import { StickyHeedTable } from '@/shared/ui/tables/StickyHeedTable';
import TableRow from '@mui/material/TableRow';
import { HeaderCell } from '@/shared/ui/tables/cells/HeaderCell';
import { CoinCell } from '@/shared/ui/tables/cells/CoinCell';
import TableCell from '@mui/material/TableCell';
//types
import { TDictionary } from '@/shared/i18n/dictionaries';

const tableColsAmount = 6;
const firstColSx = {
  position: 'sticky',
  zIndex: 10,
  left: 0,
};

export const PromotionsTable: React.FC<{
  dictionary: {
    th: TDictionary['tables']['th'];
    errors: TDictionary['errors'];
  }
}> = ({ dictionary: { th: d, errors } }) => {
  const {
    data,
    isLoading,
    isFetching,
    isError
  } = usePromotionsQuery();

  return (
    <div className="max-h-[60vh] md:max-h-none overflow-scroll md:overflow-visible">
      <StickyHeedTable
        dictionary={errors}
        rowsAmount={20}
        colsAmount={tableColsAmount}
        isLoading={isLoading}
        isFetching={isFetching}
        isError={isError}
        limit={5}
        skeletonHeight={34}
        head={
          <TableRow>
            <HeaderCell text={ d.type }/>
            <HeaderCell
              text={ d.coin }
              sx={{ ...firstColSx, backgroundColor: 'var(--palette-background-paper)' }}
            />
            <HeaderCell text={ d.start }/>
            <HeaderCell text={ d.finish }/>
            <HeaderCell
              text={ d.linkUsage }
              align="center"
            />
            <HeaderCell
              text={ d.status }
              align="center"
            />
          </TableRow>
        }
        body={
          data?.map(row => (
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