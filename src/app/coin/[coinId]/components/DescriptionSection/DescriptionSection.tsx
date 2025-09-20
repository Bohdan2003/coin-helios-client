//ui
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { Divider } from '@mui/material';
//icons
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
//utils
import { smallTitleCls } from '@/utils/consts/clsVariable';

export const DescriptionSection: React.FC<{ id: string }> = ({ id }) => {
  return (
    <section>
      <h3 className="hidden">Descriptions</h3>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{
            py: '18px'
          }}
        >
          <span className={smallTitleCls}>Accordion 1</span>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            pb: '18px'
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
      <Divider/>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{
            py: '18px'
          }}
        >
          <span className={smallTitleCls}>Accordion 1</span>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            pb: '18px'
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
    </section>
  );
};