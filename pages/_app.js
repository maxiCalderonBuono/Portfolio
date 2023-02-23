import Head from "next/head";
import { siteTitle } from "../components/layout";
import "../styles/global.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="dark:bg-gray-900">
      <Head>
        <title>{siteTitle}</title>
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff"></meta>
      </Head>

      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
