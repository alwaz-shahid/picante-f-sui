import { Container, SimpleGrid } from "@chakra-ui/react";
import React from "react";

const Layout = ({ children }) => {
  return (
    <SimpleGrid
      column={1}
      mx="auto"
      //   minW="100%"
      maxW="1600px"
      overflow={"hidden"}
      as="section"
    >
      {children}
    </SimpleGrid>
  );
};

export default Layout;
