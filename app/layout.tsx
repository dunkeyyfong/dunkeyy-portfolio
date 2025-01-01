import * as React from "react";
import type { Metadata } from "next";
import { M_PLUS_Rounded_1c } from "next/font/google";
import "./globals.css";

import { ChakraProvider } from "@chakra-ui/react";
import { ThemeProvider } from "@/components/provider/theme-provider";
import { Heading } from "@/components/heading";
import Footer from "@/components/footer";

const mPlus = M_PLUS_Rounded_1c({
  subsets: ["latin"],
  weight: ["400", "700"],
});

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
      <body className={mPlus.className}>
        <ThemeProvider defaultTheme="system" enableSystem={true}>
          <ChakraProvider>
            <Heading />
            {children}
            <Footer />
          </ChakraProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
