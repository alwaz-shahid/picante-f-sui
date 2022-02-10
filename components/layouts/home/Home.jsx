import React, { useState } from "react";
import CaroselContainer from "../../ui/common/carosel/CaroselContainer";

const Home = ({ children }) => {
  return (
    <section className="min-h-screen min-w-full flex flex-col justify-start">
      <CaroselContainer />
      {children}
    </section>
  );
};

export default Home;
