import React, { Fragment } from "react"
import { Breadcrumbs as MUI_Breadcrumbs } from "@material-ui/core"
import { Link } from "gatsby"
import { useLocation } from "@reach/router"

export const Breadcrumbs = () => {
  const { pathname } = useLocation()
  const paths = pathname.split("/").filter(x => x)

  return (
    <Fragment>
      {paths.length ? (
        <MUI_Breadcrumbs separator="|">
          {paths.map((path, index) => {
            const isLast = index === paths.length - 1
            const route = paths.slice(0, index + 1).join("/")
            return isLast ? (
              <p key={path}>{path}</p>
            ) : (
              <Link key={path} to={`/${route}`}>
                {path}
              </Link>
            )
          })}
        </MUI_Breadcrumbs>
      ) : null}
    </Fragment>
  )
}
