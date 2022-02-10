import { AddIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
  Portal,
} from "@chakra-ui/react";
import React from "react";
import NextLink from "../common/links/NextLink";

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
        <MenuGroup title="Profile">
          <MenuItem>My Account</MenuItem>
          <MenuItem>Payments </MenuItem>
        </MenuGroup>
        <MenuDivider />
        <MenuDivider />
        <MenuGroup title="Account">
          <MenuItem w={"100%"}>
            <NextLink minW="100%" href="/user/login">
              Log In
            </NextLink>
          </MenuItem>
          <MenuItem>
            <NextLink minW="100%" href="/user/register">
              Register
            </NextLink>
          </MenuItem>
        </MenuGroup>
      </MenuList>
    </Menu>
  );
};

export default AvatarMenu;

export const CartBtn = () => {
  return (
    <div className="mr-2">
      <Button
        variant="outline"
        // colorScheme={"teal"}
        size={"sm"}
        mr={4}
        leftIcon={<AddIcon />}
      >
        Cart
      </Button>
    </div>
  );
};
