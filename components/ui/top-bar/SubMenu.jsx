import {
  Flex,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  Spacer,
  Tab,
  TabList,
  Tabs,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import React from "react";

const SubMenu = () => {
  return (
    <Flex
      alignItems="center"
      justifyContent="space-between"
      mx={2}
      borderWidth={0}
      overflowX="auto"
    >
      <Tabs defaultIndex={1} borderBottomColor="transparent">
        <TabList>
          <Tab py={4} m={0} _focus={{ boxShadow: "none" }}>
            Basic
          </Tab>
          <Tab py={4} m={0} _focus={{ boxShadow: "none" }}>
            Integrations
          </Tab>
          <Tab py={4} m={0} _focus={{ boxShadow: "none" }}>
            Notifications
          </Tab>
          <Tab py={4} m={0} _focus={{ boxShadow: "none" }}>
            Usage
          </Tab>
          <Tab py={4} m={0} _focus={{ boxShadow: "none" }}>
            Billing
          </Tab>{" "}
          <Tab isDisabled py={4} m={0}>
            Advanced
          </Tab>
        </TabList>
      </Tabs>
      <Spacer />
      <HStack spacing={3} alignItems="center">
        <InputGroup display={{ base: "none", lg: "block" }} ml="auto">
          <InputLeftElement pointerEvents="none" children={<SearchIcon />} />
          <Input type="tel" placeholder="Search..." />
        </InputGroup>
      </HStack>
    </Flex>
  );
};

export default SubMenu;
