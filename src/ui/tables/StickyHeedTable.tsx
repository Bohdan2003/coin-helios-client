'use client'
import { useTheme } from '@mui/material/styles'
import Table from "@mui/material/Table";

export const StickyHeedTable: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const theme = useTheme()

  return (
    <Table
      aria-label="simple table"
      sx={{
        '& .MuiTableHead-root': {
          position: 'sticky',
          top: 0,
          zIndex: theme.zIndex.appBar,
          backgroundColor: theme.palette.background.paper,
        },

        '& .MuiTableHead-root .MuiTableCell-root:first-of-type': {
          borderTopLeftRadius: 12,
          borderBottomLeftRadius: 12,
        },

        '& .MuiTableHead-root .MuiTableCell-root:last-of-type': {
          borderTopRightRadius: 12,
          borderBottomRightRadius: 12,
        }
      }}
    >
      { children }
    </Table>
  )
}