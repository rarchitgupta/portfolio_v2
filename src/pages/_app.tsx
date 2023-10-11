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
        <script
          data-project-id="1rzRv1KhH8z3jiGcw2UF4eAtoqYJWIxniREB7340"
          src="https://snippet.meticulous.ai/v1/meticulous.js"
        />
      </Head>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default MyApp;
