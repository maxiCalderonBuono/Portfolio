import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>My first app</title>
        <meta name="description" content="my first Next.js app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>Hola todas las páginas</header>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
