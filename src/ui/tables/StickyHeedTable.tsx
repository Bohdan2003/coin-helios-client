'use client'
import { useTheme } from '@mui/material/styles'
import Table from "@mui/material/Table";
import { cn } from "@/utils/cn";

export const StickyHeedTable: React.FC<{ children: React.ReactNode, className?: string }> = ({ children, className }) => {
  const theme = useTheme()

  return (
    <Table
      className={cn(className)}
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