import React from "react";
import { Box, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box
      as="footer"
      className="mt-auto py-6 text-center"
      borderTop="1px solid"
      borderColor="gray.200"
      _dark={{ borderColor: "gray.700" }}
    >
      <Text fontSize="sm" color="gray.600" _dark={{ color: "gray.400" }}>
        © 2025 Nguyen Trong Phong. All rights reserved.
      </Text>
    </Box>
  );
};

export default Footer;
