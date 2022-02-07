import Head from "next/head";
import { HorizontalC } from "../components/Horizontal-collapse";
import MediaCard from "../components/ui/cards/MediaCard";
import CaroselContainer from "../components/ui/common/CaroselContainer";

export default function HomePage() {
  return (
    <div className="" style={{ backgroundColor: "black" }}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HorizontalC />
      <CaroselContainer />
      <MediaCard />
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: {},
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 10, // In seconds
  };
}
