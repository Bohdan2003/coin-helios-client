'use client'
//hooks
import { useTheme } from '@mui/material/styles'
//utils
import { cn } from "@/utils/cn";

type TIconProps = {
  active?: boolean,
  className?: string
}

export const ArrowIcon: React.FC<TIconProps> = ({ active, className }) => {
  const theme = useTheme();

  //TODO: remove comment

  // <div className={cn(className)}>
  //   <svg className="h-[6px]" width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
  //     <path
  //       d="M10.2997 6L6.0068 1.7071L1.71391 6C1.51864 6.19526 1.20206 6.19526 1.0068 6C0.884764 5.87796 0.838994 5.70853 0.869504 5.55095C0.887814 5.4564 0.933584 5.36612 1.0068 5.29289L5.6533 0.64644C5.747 0.55268 5.8742 0.5 6.0068 0.5C6.1394 0.5 6.2666 0.55268 6.3604 0.64644L11.0068 5.29289C11.2021 5.48815 11.2021 5.80474 11.0068 6C10.8116 6.19526 10.495 6.19526 10.2997 6Z"
  //       fill={ active ? theme.palette.primary.main : theme.palette.text.primary }/>
  //   </svg>
  // </div>

  return (
    <div className={cn(className)}>
      <svg
        width="12"
        height="8"
        viewBox="0 0 12 8"
        fill={ active ? theme.palette.primary.main : theme.palette.text.primary }
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M1 0L6 5L11 0H9L6 3L3 0H1Z"/>
      </svg>

    </div>
  )
}