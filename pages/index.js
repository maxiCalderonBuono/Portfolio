import Head from "next/head";
import Script from "next/script";
import Layout from "../components/layout";
import { ChatBot } from "../components/ChatBot";

export default function Home() {
  return (
    <Layout home>
      <Script
        src="https://kit.fontawesome.com/91231a0f83.js"
        strategy="lazyOnload"
      />
      <section>
        <article className="flex justify-center gap-8 mt-8 mb-3 text-xl font-bold">
          <div className="flex items-center gap-2">
            <i className="text-gray-300 fa-brands fa-linkedin"></i>
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
            <i className="text-gray-300 fa-brands fa-github"></i>
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
        </article>
        <article className="flex flex-col gap-4 text-xl font-medium text-gray-400">
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
            with my wife and family, or exploring the great outdoors. 🌳
          </p>
          <p>Welcome to my personal webpage!. Let´s get in touch 🚀.</p>
        </article>
      </section>
      <section className="mt-12">
        <p className="my-3 text-2xl font-bold">
          Want to know more about me? Ask my personal assistant 🤖{" "}
        </p>
        <ChatBot />
      </section>
    </Layout>
  );
}
