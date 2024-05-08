import { extendTheme } from "@chakra-ui/react";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
const fonts = {
  body: inter.style.fontFamily,
  heading: inter.style.fontFamily,
};

export type breakPointSizes = "sm" | "md" | "lg" | "xl";
export type breakPointValues = "40em" | "52em" | "64em" | "80em";

const breakpoints: Record<breakPointSizes, breakPointValues> = {
  sm: "40em",
  md: "52em",
  lg: "64em",
  xl: "80em",
};

const colorModeConfig = {
  initialColorMode: "light",
  useSystemColorMode: true,
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
  colorModeConfig,
});

export default theme;
