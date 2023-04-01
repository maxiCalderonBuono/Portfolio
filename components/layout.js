import Head from "next/head";
import webThumbnail from "../public/images/web-image.png";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";

const name = "Maxi Calderón";
export const siteTitle = "Maxi Calderón";

export default function Layout({ children, home }) {
  const [darkMode, setDarkMode] = useState(false);

  const handleThemeMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem("darkMode", !darkMode);
  };

  useEffect(() => {
    const systemColorPreference = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode !== null) {
      setDarkMode(savedMode === "true");
    } else {
      setDarkMode(systemColorPreference);
    }
  }, []);

  return (
    <section
      className={` scrollbar-track-[#372C43] scrollbar-thumb-blue-500 scrollbar  ${
        darkMode ? "dark bg-[#0E001C] " : "bg-slate-200"
      }`}
    >
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Maxi Calderón Dev." />
        <meta property="og:title" content="Maxi Calderón Dev" />
        <meta property="og:site_name" content="maxicalderon.dev" />
        <meta property="og:url" content="maxicalderon.dev" />
        <meta
          property="og:description"
          content="Maxi Calderon's website, is a platform that showcases the work and portfolio of Maxi Calderon, a skilled web developer."
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:image" content="../public/images/web-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </Head>
      <Navbar setter={handleThemeMode} />
      <main>{children}</main>
    </section>
  );
}
