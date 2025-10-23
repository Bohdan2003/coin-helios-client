'use client';
//ui
import TableCell from '@mui/material/TableCell';
//utils
import { cn } from '@/shared/lib/cn';
//types
import type { SxProps, Theme } from '@mui/material/styles';

type THeaderCellProps = {
  align?: 'left' | 'center' | 'right';
  className?: string;
  textClassName?: string;
  hidden?: boolean;
  text: string;
  sx?: SxProps<Theme>;
}

export const HeaderCell: React.FC<THeaderCellProps> = ({
  className,
  textClassName,
  hidden,
  text,
  sx,
  align,
}) => {
  return (
    <TableCell className={cn(className)} sx={sx} align={align}>
      <span className={cn(
        textClassName,
        'opacity-60 whitespace-nowrap',
        hidden && 'hidden'
      )}>{ text }</span>
    </TableCell>
  );
};