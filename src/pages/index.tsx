import React, { Fragment, useState } from "react"
import { Link } from "gatsby"

import {
  Pagination,
  Tabs,
  Breadcrumbs,
  Layout,
  Accordion,
  Checkbox,
  Chip,
  ReactHooksForm,
} from "../components/"

const IndexPage = () => {
  return (
    <Layout>
      <h1>home</h1>
      {/* <Accordion /> */}
      <ReactHooksForm />
    </Layout>
  )
}

export default IndexPage
