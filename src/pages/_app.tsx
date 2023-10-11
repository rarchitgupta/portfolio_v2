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
        <meta name="description">
          Software Engineer and Web Developer portfolio site. I love to build
          systems and experiences and I'm available to work
        </meta>
        <script
          data-project-id="1rzRv1KhH8z3jiGcw2UF4eAtoqYJWIxniREB7340"
          src="https://snippet.meticulous.ai/v1/meticulous.js"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default MyApp;
