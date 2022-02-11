import { Container, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import Footer from "../sections/footer/Footer";
import Navbar from "../ui/top-bar/Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="block"></div>

      {children}
      <Footer />
    </>
  );
};

export default Layout;
