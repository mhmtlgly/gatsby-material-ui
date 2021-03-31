import React, { Fragment, useState } from "react"
import { Link } from "gatsby"

import { Layout, MultiStepForm } from "../components/"

const Register = () => {
  return (
    <Layout>
      <h1>MultiStepForm</h1>
      <MultiStepForm />
    </Layout>
  )
}

export default Register
