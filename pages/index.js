import Script from "next/script";
import Layout from "../components/layout";
import { ChatBot } from "../components/ChatBot";
import Card from "../components/Card";
import { useTheme } from "next-themes";
import { MdOutlineLightMode, MdOutlineNightlight } from "react-icons/md";
import { useEffect, useState } from "react";

export default function Home() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <Layout home>
      <Script
        src="https://kit.fontawesome.com/91231a0f83.js"
        strategy="lazyOnload"
      />
      <div className="absolute flex items-center justify-center duration-100 border-2 border-gray-300 rounded-lg cursor-pointer right-4 md:right-0 dark:border-gray-500 hover:scale-105 active:scale-95 top-16 dark:bg-slate-700 bg-slate-200 hover:bg-opacity-80">
        {currentTheme === "dark" ? (
          <button onClick={() => setTheme("light")} className="p-2">
            <MdOutlineLightMode size={24} color={"#EDB308"} />
          </button>
        ) : (
          <button onClick={() => setTheme("dark")} className="p-2">
            <MdOutlineNightlight size={24} color={"#EDB308"} />
          </button>
        )}
      </div>
      <section className="light">
        <article className="flex justify-center gap-8 mt-8 mb-3 text-xl font-bold">
          <div className="flex items-center gap-2">
            <i className="text-gray-700 dark:text-gray-300 fa-brands fa-linkedin"></i>
            <a
              href="https://www.linkedin.com/in/mcalderonbuono/"
              rel="nooponer noreferrer"
              target="_blank"
              className="text-violet-700"
            >
              {" "}
              Linkedin{" "}
            </a>
          </div>
          <div className="flex items-center gap-2">
            <i className="text-gray-700 dark:text-gray-300 fa-brands fa-github"></i>
            <a
              href="https://github.com/maxiCalderonBuono"
              rel="nooponer noreferrer"
              target="_blank"
              className="text-violet-700"
            >
              {" "}
              Github{" "}
            </a>
          </div>
          <Card />
        </article>
        <article className="flex flex-col gap-4 text-xl font-medium text-gray-500 dark:text-gray-400">
          <p>
            Hello there! 👋 I'm a frontend developer with a passion for creating
            stunning and functional websites.
          </p>
          <p>
            I'm totally obsessed with tech, science, and entrepreneurship. 🤓 I
            mean, who wouldn't be? It's all just so cool!
          </p>
          <p>
            But let's be real, it's not all about work for me. When I'm not
            nerding out on code, you can find me riding my bike, hanging out
            with my family and friends, or exploring the great outdoors. 🌳
          </p>
          <p>Welcome to my personal webpage!. Let's get in touch 🚀.</p>
        </article>
      </section>
      <section className="mt-12">
        <p className="my-3 text-2xl font-bold text-gray-700 dark:text-white">
          Want to know more about me? Ask my personal assistant 🤖{" "}
        </p>

        <ChatBot initialMessage="Someone out there?" />
      </section>
    </Layout>
  );
}
