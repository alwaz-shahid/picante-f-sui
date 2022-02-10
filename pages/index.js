import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { IconButton, useDisclosure } from "@chakra-ui/react";
import Head from "next/head";
import Home from "../components/layouts/home/Home";
import CaroselContainer from "../components/ui/common/carosel/CaroselContainer";

export default function HomePage() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <section className="">
      <Head>
        <title>Picante</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen w-full bg-gray-100">
        <Home></Home>
      </main>
    </section>
  );
}

export async function getStaticProps() {
  return {
    props: {},
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 510, // In seconds
  };
}
