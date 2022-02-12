import { Box, HStack } from "@chakra-ui/react";
import React from "react";
import NextLink from "../common/links/NextLink";

const LeftMenu = ({ links = [] }) => {
  return (
    <HStack spacing={8} alignItems={"center"}>
      <Box
        fontFamily={"heading"}
        fontStyle={"italic"}
        fontWeight={"extrabold"}
        fontSize={"x-large"}
      >
        Logo
      </Box>
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
