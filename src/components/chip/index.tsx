import React, {
  Fragment,
  useState,
  MouseEvent,
  TouchEvent,
  ChangeEvent,
} from "react"
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles"
import {
  Button,
  Typography,
  Box,
  Checkbox as MUI_Checkbox,
  FormControlLabel,
  Chip as MUI_Chip,
  Avatar,
} from "@material-ui/core"
import { MdFace, MdCall, MdMood, MdDone } from "react-icons/md"

interface ChipArrayInterface {
  key: number
  label: string
  show: boolean
}

export const Chip = () => {
  const [show, setShow] = useState([])
  const [chipArray, setChipArray] = useState<ChipArrayInterface[]>([
    { key: 0, label: "Angular", show: true },
    { key: 1, label: "jQuery", show: true },
    { key: 2, label: "Polymer", show: true },
    { key: 3, label: "React", show: true },
    { key: 4, label: "Vue.js", show: true },
  ])

  // const handleDelete = (event: MouseEvent | TouchEvent) => {
  //   setShow(prev => !prev)
  // }

  const handleDelete = chip => (event: MouseEvent<HTMLOrSVGImageElement>) => {
    const target = event.target
    console.log({ chip, target })
  }

  const newDeleteHandler = itemToDelete => () => {
    setChipArray(prev => prev.filter(chip => chip !== itemToDelete))
  }

  return (
    <Fragment>
      {chipArray.map((chip, index) => {
        const { label, key, show } = chip
        return (
          <MUI_Chip
            key={key}
            icon={<MdMood />}
            // avatar={<Avatar>M</Avatar>}
            deleteIcon={!show ? <MdDone /> : null}
            clickable
            label={label}
            // onDelete={newDeleteHandler(chip)}
            onDelete={handleDelete(chip)}
            color="secondary"
          />
        )
      })}
    </Fragment>
  )
}
