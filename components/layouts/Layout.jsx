import { Container, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import Footer from "../sections/footer/Footer";
import CaroselContainer from "../ui/common/carosel/CaroselContainer";
import HeroCarousel from "../ui/common/carosel/HeroCarosel";
import Navbar from "../ui/top-bar/Navbar";

const Layout = ({ children }) => {
  return (
    <section className="layout">
      <div className="block"></div>
      <Navbar />
      {/* <CaroselContainer /> */}
      {/* <HeroCarousel /> */}
      {children}
      <Footer />
    </section>
  );
};

export default Layout;
