import React, { Fragment, useState, ChangeEvent } from "react"
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles"
import {
  Button,
  Typography,
  Box,
  Checkbox as MUI_Checkbox,
  FormControlLabel,
} from "@material-ui/core"
import { MdExpandMore, MdCall, MdMood } from "react-icons/md"

export const Checkbox = () => {
  const [checked, setChecked] = useState(false)

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.checked)
    setChecked(prev => !prev)
  }
  return (
    <Fragment>
      <FormControlLabel
        control={
          <MUI_Checkbox
            checkedIcon={<MdMood />}
            name="consent_checkbox"
            onChange={handleChange}
            checked={checked}
          />
        }
        label="I agree"
      />
    </Fragment>
  )
}
