//ui
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
//icons
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
//utils
import { smallTitleCls } from '@/shared/classNames';

type TDescriptionItemProps = {
  title: string;
  text: string;
}

export const DescriptionItem: React.FC<TDescriptionItemProps> = ({
  title,
  text,
}) => {
  return (
    <Accordion component="section">
      <AccordionSummary
        expandIcon={<ExpandMoreIcon/>}
        sx={{ py: '18px' }}
      >
        <span className={smallTitleCls}>{ title }</span>
      </AccordionSummary>
      <AccordionDetails  sx={{ pb: '18px' }} >
        <p className="font-inter opacity-80">{ text }</p>
      </AccordionDetails>
    </Accordion>
  );
};