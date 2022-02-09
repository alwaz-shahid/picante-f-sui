import { AddIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import React from "react";

const AvatarMenu = (links = []) => {
  return (
    <Menu>
      <MenuButton
        as={Button}
        rounded={"full"}
        variant={"link"}
        cursor={"pointer"}
        minW={0}
      >
        <Avatar
          size={"sm"}
          src={"https://www.w3schools.com/w3images/avatar6.png"}
        />
      </MenuButton>
      <MenuList>
        <MenuItem>Link 1</MenuItem>
        <MenuItem>Link 2</MenuItem>
        <MenuDivider />
        <MenuItem>Link 3</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default AvatarMenu;

export const CartBtn = () => {
  return (
    <>
      <Button
        variant="outline"
        // colorScheme={"teal"}
        size={"sm"}
        mr={4}
        leftIcon={<AddIcon />}
      >
        Cart
      </Button>
    </>
  );
};
