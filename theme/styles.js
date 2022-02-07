export const styles = {
  global: {
    "html, body": {
      fontFamily: "Inter, sans-serif",
      bg: "base.d400",
      color: "gray.200",
      h: "full",
    },
    "#root": {
      alignItems: "center",
      display: "flex",
      h: "full",
    },
    a: {
      color: "teal.500",
      _hover: {
        textDecoration: "underline",
      },
    },
    body: {
      bg: "red.400",
      color: "white",
    },
  },
};

export const breakpoints = {
  xs: "30em",
  sm: "36em",
  md: "46.25em",
  lg: "62.5em",
  xl: "78.125em",
  xxl: "95em",
};

export const colors = {
  base: {
    50: "#eceff1",
    100: "#cfd8dc",
    200: "#b0bec5",
    300: "#90a4ae",
    400: "#78909c",
    500: "#607d8b",
    600: "#546e7a",
    700: "#455a64",
    800: "#37474f",
    900: "#263238",
    d100: "#171F23",
    d200: "#12181B",
    d400: "#0D1214",
    d700: "#080C0D",
  },
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};
