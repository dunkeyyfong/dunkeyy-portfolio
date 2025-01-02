"use client";

import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Heading, Link, Text } from "@chakra-ui/react";
import React from "react";

const Introduction = () => {
  return (
    <div className="py-8">
      <Heading
        display="inline-block"
        size="lg"
        borderBottom="4px solid"
        borderColor="orange.500"
        mb={3}
      >
        Work
      </Heading>
      <Text textIndent={"1.5em"} className="leading-relaxed">
        I&apos;m an indie developer from Vietnam who loves constantly learning
        and improving my skills. I spend hours at my desk every day, staying up
        late and waking up early to code and explore new ideas. Beyond
        programming, I&apos;m passionate about football, photography, traveling,
        and diving into exciting adventures.{" "}
        <Link href="#" isExternal color={"orange.500"} whiteSpace={"nowrap"}>
          Learn more about me? <ExternalLinkIcon mx="2px" />
        </Link>
      </Text>
    </div>
  );
};

export default Introduction;
