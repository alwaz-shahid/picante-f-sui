import React, { useEffect, useState } from "react";

import { Container } from "@chakra-ui/react";

import Carosel from "./HeroCarosel";
import Image from "next/image";

const CaroselContainer = () => {
  const data = [
    { src: "/assets/static/samples/sampleB1.jpg", title: "vhmvhv" },
    { src: "/assets/static/samples/sampleB2.jpg", title: "vhmvhv" },
    { src: "/assets/static/samples/sampleB3.jpg", title: "vhmvhv" },
    { src: "/assets/static/samples/sampleB4.jpg", title: "vhmvhv" },
  ];

  return (
    <Container
      // py={8}
      // px={0}
      minW="100%"
      // p={2}
      // maxW="60%"
      mx="auto"
    >
      <Carosel gap={10}>
        {data?.map(({ title, src }, index) => (
          <div className="relative min-h-full min-w-full" key={index}>
            <div className="min-h-[500px] min-w-full">
              <Image
                src={src}
                alt="me"
                // width="300px"
                // height="100px"
                layout="fill"
                // objectFit="contain"
                // width="10000px"
                // height="500px"
                // layout="fixed"
                objectFit="cover"
              />
            </div>
            {/* <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
                {title}
              </Heading> */}
          </div>
        ))}
      </Carosel>
    </Container>
  );
};

export default CaroselContainer;
