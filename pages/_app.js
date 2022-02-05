import "../styles/globals.css";
import { ChakraProvider, theme, CSSReset, Box } from "@chakra-ui/react";
import HookForm from "../hook-form/HookForm";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
