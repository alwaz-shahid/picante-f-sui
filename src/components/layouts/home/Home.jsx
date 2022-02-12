import React, { useState } from "react";
import CaroselContainer from "../../ui/common/carosel/CaroselContainer";
import SubMenu from "../../ui/top-bar/SubMenu";

const Home = ({ children }) => {
  return (
    <section className="min-h-screen min-w-full flex flex-col justify-start">
      <CaroselContainer />
      {/* <SubMenu /> */}
      {children}
    </section>
  );
};

export default Home;
