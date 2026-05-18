"use client";

import { ThemeProvider } from "next-themes";

const ThemeProveider = ({ children }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      {children}
    </ThemeProvider>
  );
};

export default ThemeProveider;
