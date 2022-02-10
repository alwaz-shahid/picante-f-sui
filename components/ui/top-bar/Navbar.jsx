import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, AddIcon } from "@chakra-ui/icons";
import LeftMenu from "./LeftMenu";
import AvatarMenu, { CartBtn } from "./AvatarMenu";

import LinkBtn from "./../common/links/LinkBtn";
import DrawerUI from "../common/drawer/DrawerUI";
import SubMenu from "./SubMenu";

export default function Navbar() {
  const links = [
    { title: "Home", href: "/" },
    { title: "Dashboard", href: "/" },
    { title: "Products", href: "/products" },
    { title: "Orders", href: "/orders" },
    { title: "Customers", href: "/customers" },
    { title: "Reports", href: "/reports" },
  ];

  const {
    isOpen: menuIsOpen,
    onOpen: menuOnOpen,
    onClose: menuOnClose,
  } = useDisclosure();
  const {
    isOpen: cartIsOpen,
    onOpen: cartOnOpen,
    onClose: cartOnClose,
  } = useDisclosure();

  const menuBtn = () => {
    return (
      <IconButton
        size={"md"}
        icon={menuIsOpen ? <CloseIcon /> : <HamburgerIcon />}
        aria-label={"Open Menu"}
        display={{ md: "none" }}
        onClick={menuOnOpen}
      />
    );
  };

  return (
    <header className="relative top-0 left-0">
      <Box bg={useColorModeValue("gray.400", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <div className="flex space-x-3">
            <DrawerUI
              btn={menuBtn()}
              onClose={menuOnClose}
              isOpen={menuIsOpen}
              onOpen={menuOnOpen}
              position="left"
            >
              <div className="flex flex-col space-y-3 p-4 ">
                {links.map(({ title, href }, i) => (
                  <LinkBtn key={i}>{title}</LinkBtn>
                ))}
              </div>
            </DrawerUI>
            <LeftMenu links={links} />
          </div>
          {/* left menu */}
          <Flex alignItems={"center"}>
            <CartBtn />
            <AvatarMenu />
          </Flex>
        </Flex>
        <SubMenu />
      </Box>
    </header>
  );
}
