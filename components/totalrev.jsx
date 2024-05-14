
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';

export default function TotalRevenueAccordion() {
  return (
    <Accordion>
      <AccordionSummary aria-controls="panel-content" id="panel-header">
        Total Revenue
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          Total Revenue: $500.00
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
}
