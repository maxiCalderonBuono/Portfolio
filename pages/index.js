import Head from "next/head";
import Script from "next/script";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Script
        src="https://kit.fontawesome.com/91231a0f83.js"
        strategy="lazyOnload"
      />
      <section className={utilStyles.headingMd}>
        <p>
          Hello!, I´m Maxi. I´m a software developer from Argentina, living in
          Denmark.
        </p>
        <p>
          I have a degree in industrial engineering and six years of experience
          in different industries and roles. I´m passionate about technology,
          sustainability and entrepreneurship.
        </p>
        <p>Welcome to my personal webpage!. Let´s get in touch 🚀.</p>
        <div className={utilStyles.flexRow}>
          <i class="fa-brands fa-linkedin"></i>
          <a href="https://www.linkedin.com/in/mcalderonbuono/"> Linkedin </a>
          <i class="fa-brands fa-github"></i>
          <a href="https://github.com/maxiCalderonBuono"> Github </a>
        </div>
      </section>
    </Layout>
  );
}
