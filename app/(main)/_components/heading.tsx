"use client";

import { ThemeSwitcher } from "@/components/theme-switcher";
import { Text } from "@chakra-ui/react";

export const Heading = () => {
  return (
    <div className="flex items-center justify-between">
      <div>
        <Text as="b" fontSize="lg">
          DunkeyyFong
        </Text>
      </div>
      <ThemeSwitcher />
    </div>
  );
};
