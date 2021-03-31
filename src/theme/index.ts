import { createMuiTheme } from "@material-ui/core/styles"

export const theme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "*": {
          // fontFamily: "limelight",
        },
        html: { minHeight: "100%" },
        "body, #___gatsby, #gatsby-focus-wrapper": { minHeight: "100vh" },
        body: {
          // fontFamily: "limelight",
        },
        "#gatsby-focus-wrapper": {
          display: "grid",
          gridTemplateRows: "1fr",
        },
        h1: {
          fontSize: 40,
          // fontFamily: "limelight",
          // fontFamily: "Sacramento, cursive",
        },
      },
    },
  },
  spacing: 10,
})
