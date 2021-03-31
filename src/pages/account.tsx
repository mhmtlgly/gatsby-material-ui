import React from "react"
import { Breadcrumbs, Admin, Layout } from "../components/"
import { Router } from "@reach/router"

const Account = () => {
  return (
    <Layout>
      <Breadcrumbs />
      <Router basepath="/account/dashboard">
        <Admin path="admin" />
      </Router>
    </Layout>
  )
}

export default Account
