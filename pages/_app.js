import Head from "next/head";
import "../styles/global.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>My first app</title>
        <meta name="description" content="my first Next.js app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
