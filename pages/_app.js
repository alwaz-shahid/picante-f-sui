import "../styles/globals.css";
import { ChakraProvider, ScaleFade } from "@chakra-ui/react";
import HookForm from "../hook-form/HookForm";
import Layout from "./../components/layouts/Layout";
import theme from "../theme";
import Navbar from "../components/ui/top-bar/Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <section className="max-w-8xl mx-auto min-h-screen overflow-hidden">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </section>
    </ChakraProvider>
  );
}

export default MyApp;
