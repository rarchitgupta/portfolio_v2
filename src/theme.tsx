import { extendTheme } from "@chakra-ui/react";
import { Gabarito, Rubik } from "next/font/google";
const gabarito = Gabarito({ subsets: ["latin"] });
const rubik = Rubik({ subsets: ["latin"] });
const fonts = {
  body: gabarito.style.fontFamily,
  heading: rubik.style.fontFamily,
};

export type breakPointSizes = "sm" | "md" | "lg" | "xl";
export type breakPointValues = "40em" | "52em" | "64em" | "80em";

const breakpoints: Record<breakPointSizes, breakPointValues> = {
  sm: "40em",
  md: "52em",
  lg: "64em",
  xl: "80em",
};

const theme = extendTheme({
  colors: {
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
