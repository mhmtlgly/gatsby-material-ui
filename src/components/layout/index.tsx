import React, { Fragment, useState } from "react"
import { Box, BoxProps } from "@material-ui/core"
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles"

import { Header, Footer } from "../../components"

const uselayoutStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: theme.spacing(5),
    },
  })
)

export const Layout = (props: BoxProps) => {
  const classes = uselayoutStyles()
  return (
    <Fragment>
      <Header />
      <Box component="main" mt={6.4} {...props} />
      <Footer />
    </Fragment>
  )
}
