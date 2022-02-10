import React from "react";
import {
  AlertTitle,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
} from "@chakra-ui/react";

const DrawerPages = ({
  children,
  onClose,
  isOpen,
  onOpen,
  headerTitle = "headerTitle",
  btn,
  position = "right",
  ...props
}) => {
  return (
    <div className="">
      {btn && btn}
      {!btn && (
        <Button onClick={onOpen} {...props}>
          Open
        </Button>
      )}
      <Drawer placement={position} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">{headerTitle}</DrawerHeader>
          <DrawerBody>{children}</DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default DrawerPages;
