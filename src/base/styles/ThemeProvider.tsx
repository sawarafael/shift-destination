import { ThemeContext } from "@emotion/react";
import { createTheme, ThemeProvider as MuiThemeProvider } from "@mui/material";
import { ReactNode } from "react";

type MyComponentProps = {
  children: ReactNode;
};

const Theme = createTheme({
  palette: {
    primary: {
      main: "#ff0000",
    },
    secondary: {
      main: "#00ff00",
    },
  },
});

export const ThemeProvider = ({ children }: MyComponentProps) => {
  return (
    <MuiThemeProvider theme={Theme}>
      <ThemeContext.Provider value={{}}>{children}</ThemeContext.Provider>
    </MuiThemeProvider>
  );
};
