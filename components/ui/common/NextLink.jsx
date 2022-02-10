import { Link as ChakraLink, propNames } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const NextLink = ({ href = "/", children, to, ...props }) => {
  return (
    <Link className="min-w-full" passHref href={href}>
      <ChakraLink {...props}>{children}</ChakraLink>
    </Link>
  );
};

export default NextLink;
