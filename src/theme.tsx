import { extendTheme } from "@chakra-ui/react";
import { Raleway } from "next/font/google";
const inter = Raleway({ subsets: ["latin"] });
const fonts = { body: inter.style.fontFamily, heading: inter.style.fontFamily };

const breakpoints = {
  sm: "40em",
  md: "52em",
  lg: "64em",
  xl: "80em",
};

const theme = extendTheme({
  colors: {
    black: "#16161D",
    headingColors: {
      light: {
        h1: "#212529",
        h2: "#495057",
        h3: "#6C757D",
      },
      dark: {
        h1: "#F8F9FA",
        h2: "#DEE2E6",
        h3: "#ADB5BD",
      },
    },
  },
  fonts,
  breakpoints,
});

export default theme;
