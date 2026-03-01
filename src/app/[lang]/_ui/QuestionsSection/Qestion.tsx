'use client';
//ui
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
//icons
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
//utils
import { cn } from '@/shared/lib/cn';
import { titleCls } from '@/shared/classNames';

export const Question: React.FC<{
  question: string;
  answer: string;
}> = ({
  question,
  answer,
}) => {

  return (
    <div className={cn(
      'rounded-[12px] border',
      'border-[var(--lightGray)]',
      'dark:border-transparent dark:bg-[var(--darkBg2)]',
    )}>
      <Accordion elevation={0}>
        <AccordionSummary
          sx={{
            gap: '10px',
            p: {
              xs:'12px',
              md:'24px',
            },
          }}
          expandIcon={<ArrowBackIosNewIcon className="-rotate-90" color="primary"/>}
        >
          <div className={titleCls}>{question}</div>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            p: {
              xs:'12px',
              md:'24px',
            },
          }}
        >
          <div className={cn(
            'pl-[16px] relative',
            'before:absolute before:top-0 before:bottom-0 before:left-0',
            'before:w-[2px] before:rounded-[2px]',
            'before:bg-gradient-to-b before:from-sky-300 before:via-blue-600 before:to-sky-400' )}
          >
            {answer}
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};