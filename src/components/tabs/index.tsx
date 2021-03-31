import React, { Fragment, useState } from "react"
import { Tabs as MUI_Tabs, Tab, Box } from "@material-ui/core"

export const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0)

  const handleTabChange = (event, value) => {
    setActiveTab(value)
  }
  return (
    <Fragment>
      <MUI_Tabs value={activeTab} onChange={handleTabChange}>
        <Tab label="Register new Account" />
        <Tab label="Sign In" />
        <Tab label="FAQ" />
      </MUI_Tabs>
      <Box>{activeTab === 0 && "TAB 1"}</Box>
      <Box>{activeTab === 1 && "TAB 2"}</Box>
      <Box>{activeTab === 2 && "TAB 3"}</Box>
    </Fragment>
  )
}
