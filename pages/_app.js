import Head from "next/head";
import { siteTitle } from "../components/layout";
import "../styles/global.css";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <div className="dark:bg-gray-900 bg-slate-100">
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
          {/* <link rel="manifest" href="/site.webmanifest" /> */}
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff"></meta>
          <meta
            property="og:image"
            content="https://res.cloudinary.com/dvqlenul5/image/upload/v1677250939/Maxi_Calder%C3%B3n_e3ibxq.png"
          />
        </Head>

        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
