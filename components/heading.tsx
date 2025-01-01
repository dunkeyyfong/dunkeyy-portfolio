"use client";

import { ThemeSwitcher } from "@/components/theme-switcher";
import { Text, Box, HStack, useColorMode } from "@chakra-ui/react";

export const Heading = () => {
  const { colorMode } = useColorMode();

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      p={2}
      zIndex={50}
      bg={colorMode === "dark" ? "gray.800" : "yellow.50"}
      backdropFilter="blur(20px)"
      opacity={0.7}
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        mx={{ base: "6", xl: "30vh" }}
      >
        <HStack>
          <Text
            as="b"
            fontSize="xl"
            color={colorMode === "dark" ? "white" : "black"}
          >
            DunkeyyFong
          </Text>
        </HStack>
        <ThemeSwitcher />
      </Box>
    </Box>
  );
};
