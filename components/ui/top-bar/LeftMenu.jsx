import { Box, HStack } from "@chakra-ui/react";
import React from "react";
import NavLink from "./NavLink";

const LeftMenu = ({ links = [] }) => {
  return (
    <HStack spacing={8} alignItems={"center"}>
      <Box>Logo</Box>
      <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
        {links.map((link) => (
          <NavLink key={link}>{link}</NavLink>
        ))}
      </HStack>
    </HStack>
  );
};

export default LeftMenu;
