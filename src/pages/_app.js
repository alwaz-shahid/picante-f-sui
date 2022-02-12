import "../styles/globals.css";
import { ChakraProvider, ScaleFade, theme, CSSReset } from "@chakra-ui/react";
import Layout from "./../components/layouts/Layout";
import { theme as newTheme } from "../theme";

const config = (theme) => ({
  light: {
    color: theme.colors.green[700],
    bg: theme.colors.red[500],
    borderColor: theme.colors.gray[200],
    placeholderColor: theme.colors.gray[500],
  },
  dark: {
    color: theme.colors.whiteAlpha[900],
    bg: theme.colors.gray[800],
    borderColor: theme.colors.whiteAlpha[300],
    placeholderColor: theme.colors.whiteAlpha[400],
  },
});
function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={newTheme}>
      <CSSReset config={config} />
      <section className="max-w-8xl mx-auto min-h-screen overflow-hidden">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </section>
    </ChakraProvider>
  );
}

export default MyApp;
