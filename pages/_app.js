import "../styles/globals.css";
import { ChakraProvider, theme, CSSReset, Box } from "@chakra-ui/react";
import HookForm from "../hook-form/HookForm";
import Layout from "./../components/layouts/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <section className="max-w-8xl mx-auto min-h-screen overflow-hidden">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </section>
      <CSSReset />
    </ChakraProvider>
  );
}

export default MyApp;
