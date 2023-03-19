import Layout from "../components/layout";
import Contact from "../components/Contact";
import { Projects } from "../components/Projects";

import Hero from "../components/Hero";

export default function Home() {
  return (
    <Layout>
      <div className="snap-start">
        <Hero />
      </div>
      <div className="snap-start">
        <Projects />
      </div>
      <div className="snap-start">
        <Contact />
      </div>
    </Layout>
  );
}
