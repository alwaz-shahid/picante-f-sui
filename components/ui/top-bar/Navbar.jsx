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
import NavLink from "./NavLink";
import LeftMenu from "./LeftMenu";
import AvatarMenu, { CartBtn } from "./AvatarMenu";

export default function Navbar() {
  const links = ["Dashboard", "Orders", "Deals", "Discounts", "Favoutites"];

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <header className="relative top-0 left-0">
      <Box bg={useColorModeValue("gray.400", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <LeftMenu links={links} />

          {/* left menu */}
          <Flex alignItems={"center"}>
            <CartBtn />
            <AvatarMenu />
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </header>
  );
}
