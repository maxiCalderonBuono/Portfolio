import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";

import Link from "next/link";

const name = "Maxi Calderón";
export const siteTitle = "Maxi Calderón";

export default function Layout({ children, home }) {
  return (
    <div className="max-w-[800px]  px-[1rem] mx-auto pt-[3rem] dark:bg-gray-900 text-white">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Welcome to my portfolio" />
        <meta property="og:image" content="/images/profile.jpg" />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="/images/profile.jpg" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/images/profile.jpg"
              height={160}
              width={160}
              alt={name}
              className="rounded-full"
            />
            <h1 className="mt-4 text-4xl font-bold font-mona">{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <a>
                <Image
                  priority
                  src="/images/profile.jpg"
                  height={108}
                  width={108}
                  alt={name}
                />
              </a>
            </Link>
            <h2>
              <Link href="/">
                <a>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      <footer className="flex justify-center py-6 font-bold">
        Built with 💗 &amp; ☕️ &amp; 🧉 &amp; AI
      </footer>
    </div>
  );
}
