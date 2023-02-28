import Head from "next/head";
import Image from "next/image";

import Link from "next/link";

const name = "Maxi Calderón";
export const siteTitle = "Maxi Calderón";

export default function Layout({ children, home }) {
  return (
    <div className="relative max-w-[800px]  px-[1rem] mx-auto pt-[3rem]  text-white">
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
      <header className="text-center">
        {home ? (
          <>
            <Image
              priority
              src="/images/profile.jpg"
              height={160}
              width={160}
              alt={name}
              className="rounded-full "
            />
            <h1 className="mt-4 text-4xl font-bold text-gray-700 dark:text-white font-mona">
              {name}
            </h1>
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
                  className="border-2 border-gray-900 rounded-full"
                />
              </a>
            </Link>
            <h2 className="mt-4 text-4xl font-bold text-gray-700 dark:text-white font-mona">
              <Link href="/">
                <a>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      <footer className="flex justify-center py-6 font-bold text-gray-700 dark:text-white">
        Built with 💗 &amp; ☕️ &amp; 🧉 &amp; AI
      </footer>
    </div>
  );
}
