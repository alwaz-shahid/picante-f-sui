import { Container, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import Footer from "../sections/footer/Footer";
import CaroselContainer from "../ui/common/CaroselContainer";
import HeroCarousel from "../ui/common/HeroCarosel";
import Navbar from "../ui/top-bar/Navbar";

const Layout = ({ children }) => {
  return (
    <SimpleGrid
      column={1}
      mx="auto"
      //   minW="100%"
      maxW="1800px"
      minH="100vh"
      overflow={"hidden"}
      as="section"
    >
      <Navbar />
      {/* <CaroselContainer /> */}
      <HeroCarousel />
      {children}
      <Footer />
    </SimpleGrid>
  );
};

export default Layout;
