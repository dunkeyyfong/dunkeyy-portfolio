"use client";

import {
  Box,
  Text,
  Button,
  VStack,
  Image,
  useColorMode,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const NotFoundPage = () => {
  const { colorMode } = useColorMode();

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      h={"100vh"}
      textAlign="center"
      px={4}
    >
      <VStack spacing={4}>
        <Text fontSize={"6xl"} fontWeight={"bold"}>
          404 :((
        </Text>
        <Text fontSize={"2xl"}>
          Oops! The page you&apos;re looking for doesn&apos;t exist.
        </Text>
        <Text fontSize={"md"}>
          Maybe the page was removed, or you mistyped the URL.
        </Text>
        <Link href="/" passHref>
          <Button bgColor={colorMode === "dark" ? "gray.700" : "orange.300"}>
            Go Back Home
          </Button>
        </Link>
      </VStack>
    </Box>
  );
};

export default NotFoundPage;
