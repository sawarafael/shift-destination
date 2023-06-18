"use client";
import Routes from "./routes";
import { ThemeProvider } from "./styles/ThemeProvider";

const App = () => {
  return (
    <ThemeProvider>
      <Routes />
    </ThemeProvider>
  );
};

export default App;
