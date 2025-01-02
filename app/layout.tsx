"use client";
import * as React from "react";
import { M_PLUS_Rounded_1c } from "next/font/google";
import "./globals.css";

import { ChakraProvider } from "@chakra-ui/react";
import { ThemeProvider } from "@/components/provider/theme-provider";
import { Heading } from "@/components/heading";
import Footer from "@/components/footer";
import { AnimatePresence, motion } from "framer-motion";

const mPlus = M_PLUS_Rounded_1c({
  subsets: ["latin"],
  weight: ["400", "700"],
});

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
            <AnimatePresence mode="wait">
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5 }}
              >
                {children}
              </motion.div>
            </AnimatePresence>
            <Footer />
          </ChakraProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
