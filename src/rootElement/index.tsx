import React, { Fragment } from "react"
import { ThemeProvider } from "@material-ui/core/styles"
import { CssBaseline } from "@material-ui/core"

import { theme } from "../theme"

export const RootElement = ({ children }) => {
  return (
    <Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </Fragment>
  )
}
