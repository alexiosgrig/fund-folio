import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import React from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface AccordionSharedProps {
  children: React.ReactNode;
  label: string;
  opened?: boolean;
}

export const AccordionShared: React.FC<AccordionSharedProps> = ({
  children,
  label,
  opened = false,
}) => {
  return (
    <Accordion sx={{ color: 'black' }} defaultExpanded={opened}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
        sx={{ color: 'wheat' }}
      >
        {label}
      </AccordionSummary>
      <AccordionDetails>{children}</AccordionDetails>
    </Accordion>
  );
};
