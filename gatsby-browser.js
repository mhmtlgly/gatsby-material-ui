import React from "react"
import { RootElement } from "./src/rootElement"

export const wrapRootElement = ({ element }) => {
  return <RootElement>{element}</RootElement>
}
