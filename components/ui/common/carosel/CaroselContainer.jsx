import React, { useEffect, useState } from "react";
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
    <div className="-my-2">
      <Carosel gap={1}>
        {data?.map(({ title, src }, index) => (
          <div className="relative min-h-full min-w-full" key={index}>
            <div className="min-h-[500px] min-w-full">
              <Image src={src} alt="me" layout="fill" objectFit="cover" />
            </div>
          </div>
        ))}
      </Carosel>
    </div>
  );
};

export default CaroselContainer;
