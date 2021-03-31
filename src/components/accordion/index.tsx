import React from "react"
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles"
import {
  Accordion as MUI_Accordion,
  AccordionDetails,
  AccordionSummary,
  AccordionActions,
  Button,
  Typography,
  Box,
} from "@material-ui/core"
import { MdExpandMore } from "react-icons/md"

export const Accordion = () => {
  return (
    <MUI_Accordion>
      <AccordionSummary expandIcon={<MdExpandMore />}>
        <Box display="flex" flexBasis="30%" justifyContent="space-around">
          <Typography>Location</Typography>
          <Typography>Select trip destination</Typography>
        </Box>
      </AccordionSummary>
      <AccordionDetails></AccordionDetails>
      <AccordionActions>
        <Button>send</Button>
        <Button>cancel</Button>
      </AccordionActions>
    </MUI_Accordion>
  )
}
