"use client";

import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Link, Text } from "@chakra-ui/react";
import React from "react";

const Introduction = () => {
  return (
    <div>
      <Text textIndent={"1.5em"} paddingY={8} className="leading-relaxed">
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
