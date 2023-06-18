import { ThemeContext } from "@emotion/react";
import { ReactNode } from "react";

type MyComponentProps = {
  children: ReactNode;
};

export const ThemeProvider = ({ children }: MyComponentProps) => {
  return <ThemeContext.Provider value={{}}>{children}</ThemeContext.Provider>;
};
