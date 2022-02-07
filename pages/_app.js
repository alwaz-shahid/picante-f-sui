import "../styles/globals.css";
import { ChakraProvider, theme, CSSReset, Box } from "@chakra-ui/react";
import HookForm from "../hook-form/HookForm";
import Layout from "./../components/layouts/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;
