import { ChakraProvider } from "@chakra-ui/provider";
import { CacheProvider } from "@chakra-ui/next-js";
import theme from "../theme";
import { AppProps } from "next/app";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Analytics />
      <Head>
        <title>Archit Gupta</title>
      </Head>
      <CacheProvider>
        <ChakraProvider theme={theme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </CacheProvider>
    </>
  );
}

export default MyApp;
