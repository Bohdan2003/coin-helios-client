//hooks
import { useMyCoinsQuery } from '@/features/profile/api/myCoins/useMyCoinsQuery';
//ui
import { StickyHeedTable } from '@/shared/ui/tables/StickyHeedTable';
import TableRow from '@mui/material/TableRow';
import { HeaderCell } from '@/shared/ui/tables/cells/HeaderCell';
import { CoinCell } from '@/shared/ui/tables/cells/CoinCell';
import TableCell from '@mui/material/TableCell';
import { PromotionCell } from '@/app/[lang]/profile/_ui/tables/cells/PromotionCell';
//types
import { TDictionary } from '@/shared/i18n/dictionaries';

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

export const MyCoinsTable: React.FC<{
  dictionary: {
    buttons: TDictionary['buttons'];
    form: TDictionary['forms']['contact'];
    formErrors: TDictionary['forms']['errors'];
    link: TDictionary['links']['privacyPolicy'];
    th: TDictionary['tables']['th'];
    errors: TDictionary['errors'];
  }
}> = ({ dictionary: { th: d, errors, formErrors, buttons, form, link } }) => {
  const {
    data,
    isLoading,
    isFetching,
    isError
  } = useMyCoinsQuery();

  return (
    <div className="max-h-[60vh] md:max-h-none overflow-scroll md:overflow-visible">
      <StickyHeedTable
        dictionary={errors}
        rowsAmount={data?.length}
        colsAmount={tableColsAmount}
        isLoading={isLoading}
        isFetching={isFetching}
        isError={isError}
        limit={5}
        skeletonHeight={34}
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
              text={ d.coin }
              sx={{ ...firstColSx, backgroundColor: 'var(--palette-background-paper)' }}
            />
            <HeaderCell
              text={ d.allTimeViews }
              align="center"
            />
            <HeaderCell
              text={ d['7DaysViews'] }
              align="center"
            />
            <HeaderCell
              text={ d.votes }
              align="center"
            />
            <HeaderCell
              text={ d.promotion }
              align="center"
            />
            <HeaderCell text={ d.start }/>
            <HeaderCell text={ d.finish }/>
            <HeaderCell text={ d.promote } hidden/>
          </TableRow>
        }
        body={
          data?.map(row => (
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
              <PromotionCell
                id={row.id}
                dictionary={{ buttons, form, link, errors: formErrors }}
              />
            </TableRow>
          ))
        }
      />
    </div>
  );
};