import { Box, HStack } from "@chakra-ui/react";
import React from "react";
import LinkBtn from "../common/LinkBtn";
import NextLink from "../common/NextLink";
import NavLink from "./NavLink";

const LeftMenu = ({ links = [] }) => {
  return (
    <HStack spacing={8} alignItems={"center"}>
      <Box>Logo</Box>
      <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
        {links.map(({ title, href }, i) => (
          <NextLink href={href} key={i}>
            {title}
          </NextLink>
        ))}
      </HStack>
    </HStack>
  );
};

export default LeftMenu;
