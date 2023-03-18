import Head from "next/head";

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
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode !== null) {
      setDarkMode(savedMode === "true");
    }
  }, []);

  return (
    <section
      className={`h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0  ${
        darkMode ? "dark  bg-[#0E001C]" : "bg-gray-200"
      }`}
    >
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Welcome to my portfolio" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dvqlenul5/image/upload/v1677250939/Maxi_Calder%C3%B3n_e3ibxq.png"
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Navbar setter={handleThemeMode} />
      <main>{children}</main>
    </section>
  );
}
