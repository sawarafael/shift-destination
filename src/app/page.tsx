"use client";
import { ThemeProvider } from "../base/styles/ThemeProvider";
import Routes from "./routes";

const App = () => {
  return (
    <ThemeProvider>
      <Routes />
    </ThemeProvider>
  );
};

export default App;
