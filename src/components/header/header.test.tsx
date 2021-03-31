import React from "react"
import { render } from "@testing-library/react"

import { HeaderInterface } from "./"
import { Header } from "./"

describe("describe the header", () => {
  test("displays the title", () => {
    const { container, getByText } = render(<Header title="title" />)
    expect(container).toBeInTheDocument()
  })
})

describe("describe the header", () => {
  test("displays the title", () => {
    const { container, getByText } = render(<Header title="title" />)
    expect(getByText(/title/i)).toBeInTheDocument()
  })
})
