"use client";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "base/config/queryClient";
import { ThemeProvider } from "../base/styles/ThemeProvider";
import Routes from "./routes";

const App = () => {
  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <Routes />
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default App;
