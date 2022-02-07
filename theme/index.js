// 1. Import the extendTheme function
import { extendTheme } from "@chakra-ui/react";

import { createBreakpoints } from "@chakra-ui/theme-tools";
import { breakpoints, styles } from "./styles";
import { colors } from "./styles";
// 2. Extend the theme to include custom colors, fonts, etc
// const colors = {};

// export default theme

const customTheme = {
  styles,
  // breakpoints: createBreakpoints(breakpoints),
  colors,
  components: {
    Heading: {
      baseStyle: {
        // fontFamily: "inherit",
        // fontWeight: "normal",
        // color: "inherit",
      },
    },
    Text: {
      baseStyle: {
        // fontFamily: "inherit",
        // fontWeight: "normal",
        // lineHeight: "tall",
        // color: "inherit",
      },
    },
    // Button: {
    //   baseStyle: {
    //     textTransform: "uppercase",
    //     letterSpacing: "widest",
    //     fontWeight: "normal",
    //     userSelect: "none",
    //     colorScheme: "gray.900",
    //   },
    // },
  },
};

const theme = extendTheme(customTheme);

export default theme;
