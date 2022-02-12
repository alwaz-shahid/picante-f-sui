// 1. Import the extendTheme function
import { extendTheme } from "@chakra-ui/react";

import { createBreakpoints } from "@chakra-ui/theme-tools";
import { btnStyles } from "./components/button";
// import { styles, colors } from "./styles";

// 2. Extend the theme to include custom colors, fonts, etc
// const colors = {};
const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};
// export default theme

// 2. Update the breakpoints as key-value pairs
const breakpoints = createBreakpoints({
  base: "20rem",
  md: "48rem",
  lg: "60rem",
  xl: "75rem",
  "2xl": "100rem",
});
const customTheme = {
  semanticTokens: {
    colors: {
      error: "red.400",
      success: "green.500",
      primary: {
        default: "red.600",
        // _dark: "orange.400",
        _dark: "#ff934a",
      },
      secondary: {
        default: "green.800",
        _dark: "orange.700",
        // _dark: "#ff934a",
      },
      text: {
        default: "blue.900",
        _dark: "blue.50",
      },
    },
  },
  config,
  breakpoints,
  components: {
    Button: btnStyles,
  },
};

export const theme = extendTheme(customTheme);
