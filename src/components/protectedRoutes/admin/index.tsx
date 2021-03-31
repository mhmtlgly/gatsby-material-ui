import React, { Fragment, useState, useEffect, ReactNode } from "react"
import {
  AppBar,
  Toolbar,
  Button,
  CircularProgress,
  Box,
  Breadcrumbs as MUI_Breadcrumbs,
} from "@material-ui/core"
import { Pagination as MUI_Pagination } from "@material-ui/lab"
import { Link } from "gatsby"
import { useLocation, RouteComponentProps } from "@reach/router"

export const Admin = (props: RouteComponentProps) => {
  return (
    <Fragment>
      <h1>ADMIN</h1>
    </Fragment>
  )
}
