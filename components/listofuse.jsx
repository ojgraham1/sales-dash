import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';


export default function ListOfUsersAccordion() {

      return (
        <Accordion>
          <AccordionSummary aria-controls="panel-content" id="panel-header">
            Total Users
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Total Users: 9
            </Typography>
          </AccordionDetails>
        </Accordion>
      );
    }