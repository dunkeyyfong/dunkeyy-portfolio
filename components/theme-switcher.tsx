"use client";

import { useTheme } from "next-themes";
import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const { colorMode, toggleColorMode } = useColorMode();

  useEffect(() => {
    if (colorMode !== theme) {
      setTheme(colorMode);
    }
  }, [colorMode, theme, setTheme]);

  const handleToggle = () => {
    toggleColorMode();
  };

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        style={{ display: "inline-block" }}
        key={useColorModeValue("light", "dark")}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <IconButton
          aria-label="Toggle Dark Mode"
          colorScheme={useColorModeValue("purple", "orange")}
          icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
          onClick={handleToggle}
          size="md"
        />
      </motion.div>
    </AnimatePresence>
  );
};
