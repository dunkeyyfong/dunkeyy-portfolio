"use client";

import { ThemeSwitcher } from "@/components/theme-switcher";
import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Text,
  Box,
  HStack,
  useColorMode,
  Menu,
  MenuButton,
  IconButton,
  MenuList,
  MenuItem,
  Link,
  MenuGroup,
  Divider,
} from "@chakra-ui/react";
import DuckFoot from "./icons/duckfoot";

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
      className="backdrop-blur-lg"
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        mx={{ base: "3", xl: "30vh" }}
      >
        <HStack alignItems={"center"}>
          <DuckFoot />
          <Link
            href="/"
            as="b"
            fontSize="xl"
            color={colorMode === "dark" ? "white" : "blackAlpha.900"}
            _hover={{ textDecoration: "none" }}
          >
            DunkeyyFong
          </Link>
          <HStack
            display={{ base: "none", md: "flex" }}
            spacing={6}
            alignItems={"center"}
            ml={"100px"}
          >
            <Link href="/works">Works</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/contact">Contact</Link>
          </HStack>
        </HStack>
        <HStack>
          <ThemeSwitcher />
          <Box display={{ base: "flex", md: "none" }}>
            <Menu isLazy>
              <MenuButton
                as={IconButton}
                aria-label="More"
                icon={<HamburgerIcon />}
                variant={"outline"}
                borderColor={"gray.400"}
              />
              <MenuList>
                <MenuItem>
                  <Link href="/">Home</Link>
                </MenuItem>
                <MenuItem>
                  <Link href="/works">Works</Link>
                </MenuItem>
                <MenuItem>
                  <Link href="/projects">Projects</Link>
                </MenuItem>
                <MenuItem>
                  <Link href="/contact">Contact</Link>
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </HStack>
      </Box>
    </Box>
  );
};
