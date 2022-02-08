import React, { useEffect, useState } from "react";

import {
  Container,
  Heading,
  Button,
  VStack,
  HStack,
  Box,
  Text,
  Flex,
  Tag,
  Stack,
} from "@chakra-ui/react";
import { capsFirst } from "../../../../utils";
import ChakraCarousel from "./ChakraCarosel";
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
          <Box
            key={index}
            height={"400px"}
            position="relative"
            backgroundPosition="center"
            // backgroundRepeat="no-repeat"
            // backgroundSize="cover"
            // backgroundImage={`url(${post.image})`}
            minW="100%"
            bg={"gray.50"}
          >
            {/* This is the block you need to change, to customize the caption */}
            <Flex
              align={"center"}
              justify={"center"}
              minW={"100%"}
              minH="100%"
              position="relative"
            >
              <Image
                src={src}
                alt="me"
                width="3000px"
                height="1000px"
                style={{ minHeight: "100%" }}
              />
              {/* <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
                {title}
              </Heading> */}
            </Flex>
          </Box>
        ))}
      </Carosel>
    </Container>
  );
};

export default CaroselContainer;
