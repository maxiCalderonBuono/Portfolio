import Layout from "../components/layout";
import Contact from "../components/Contact";
import { Projects } from "../components/Projects";

import Hero from "../components/Hero";

export default function Home() {
  return (
    <Layout>
      <Hero />

      <Projects />

      <Contact />
    </Layout>
  );
}
