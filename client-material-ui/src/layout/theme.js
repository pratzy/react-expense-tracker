import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#a7ffeb",
    },
    secondary: {
      main: "#ff4081",
    },
    text: {
      primary: {
        main: "#212121",
      },
      secondary: {
        main: "a7ffeb",
      },
    },
  },
  typography: {
    h1: {
      fontSize: "4rem",
    },
    h2: {
      fontSize: "3.5rem",
    },
    h3: {
      fontSize: "3rem",
    },
    h4: {
      fontSize: "2.5rem",
    },
    h5: {
      fontSize: "2rem",
    },
    h6: {
      fontSize: "2rem",
    },
  },
});

export default theme;
