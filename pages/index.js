import Layout from "../components/layout";
import { ChatBot } from "../components/ChatBot";
import { Projects } from "../components/Projects";

import Hero from "../components/Hero";

export default function Home() {
  return (
    <Layout>
      <div className="snap-start">
        <Hero />
      </div>
      <div className="snap-center">
        <Projects />
      </div>
      <section className="relative h-screen snap-end">
        <p className="absolute p-5 py-4 text-2xl font-bold text-center text-gray-700 top-28 dark:text-white">
          Want to know more about me? Ask my personal assistant 🤖
        </p>

        <ChatBot initialMessage="Someone out there?" />
      </section>{" "}
      *
    </Layout>
  );
}
