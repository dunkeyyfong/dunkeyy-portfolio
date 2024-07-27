import * as React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { ChakraProvider } from "@chakra-ui/react";
import { ThemeProvider } from "@/components/provider/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DunkeyyFong - My Portfolio",
  description: "Welcome to my portfolio! I am a software engineer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ChakraProvider>
          <ThemeProvider defaultTheme="system" enableSystem={true}>
            {children}
          </ThemeProvider>
        </ChakraProvider>
      </body>
    </html>
  );
}
