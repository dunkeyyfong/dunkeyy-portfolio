"use client";

import { ThemeSwitcher } from "@/components/theme-switcher";
import { Text } from "@chakra-ui/react";
import { Stack, HStack, VStack } from "@chakra-ui/react";

export const Heading = () => {
  return (
    <div className="fixed top-0 left-0 right-0 p-2 z-50">
      <div className="flex items-center justify-between xl:mx-[30vh] mx-3">
        <HStack>
          <Text as="b" fontSize="xl">
            DunkeyyFong
          </Text>
        </HStack>
        <ThemeSwitcher />
      </div>
    </div>
  );
};
