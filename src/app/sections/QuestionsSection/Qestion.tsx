'use client';
//ui
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
//icons
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
//utils
import { cn } from '@/utils/cn';


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
      'border-[var(--darkGray)]',
      'dark:border-transparent dark:bg-[var(--darkBg2)]',
    )}>
      <Accordion
        elevation={0}
        sx={{
          boxShadow: 'none',
          backgroundColor: 'transparent',
          '&.Mui-expanded': { margin: 0 },
          '&:before': { display: 'none' },
          '& .MuiAccordionSummary-root': {
            px: '24px',
            py: '12px'
          },
        }}
      >
        <AccordionSummary
          expandIcon={<ArrowBackIosNewIcon className="-rotate-90" color="primary"/>}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <div className="text-[24px]">{question}</div>
        </AccordionSummary>
        <AccordionDetails>
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