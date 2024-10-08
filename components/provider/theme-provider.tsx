"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import "../../app/globals.css";
import { type ThemeProviderProps } from "next-themes/dist/types";

export const ThemeProvider = ({ children, ...props }: ThemeProviderProps) => {
  return (
    <NextThemesProvider attribute="class" {...props}>
      {children}
    </NextThemesProvider>
  );
};
