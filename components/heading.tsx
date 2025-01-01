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
        <HStack>
          <Link
            href="/"
            as="b"
            fontSize="xl"
            color={colorMode === "dark" ? "white" : "blackAlpha.900"}
            _hover={{ textDecoration: "none" }}
          >
            DunkeyyFong
          </Link>
        </HStack>
        <HStack>
          <ThemeSwitcher />
          <Box display={{ base: "flex", md: "none" }}>
            <Menu>
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
                  <Link href="/">Works</Link>
                </MenuItem>
                <MenuItem>
                  <Link href="/">Projects</Link>
                </MenuItem>
                <MenuItem>
                  <Link href="/">Contact</Link>
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </HStack>
      </Box>
    </Box>
  );
};
