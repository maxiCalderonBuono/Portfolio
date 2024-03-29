import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import Image from "next/image";
import profile from "../public/images/picprofile.png";
import { motion } from "framer-motion";

const Hero = () => {
  const [text, count] = useTypewriter({
    words: [
      "Hi, I'm Maxi Calderón",
      "Loves-technology.tsx",
      "< ButLovesToCodeMore />",
      "() => Ferrari cars fan",
      "{ address: worldwide }",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <motion.section
      id="hero"
      className="flex flex-col items-center justify-center space-y-8 text-center min-h-[calc(100vh-72px)] md:pb-10 dark:bg-gradient-to-b dark:from-[#0E001C] dark:to-[#3a175d]"
    >
      <div className="w-40 h-40 mx-auto overflow-hidden rounded-full bg-gradient-to-b from-blue-500 to-cyan-500 ">
        <Image src={profile} alt="Maximiliano Calderón web developer" />
      </div>

      <h2 className="text-2xl font-medium dark:text-white">Web Developer</h2>

      <h3 className="px-2 text-2xl font-bold text-center text-transparent md:text-3xl bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">
        {text}
        <Cursor cursorColor="#EFC224" />
      </h3>

      <p className="max-w-4xl px-5 leading-8 tracking-widest text-gray-600 text-md dark:text-gray-300 md:text-lg">
        Bringing ideas to life with creativity and technology. Let's make
        something extraordinary together. Join me down below and{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r dark:from-yellow-300 dark:to-lime-200 from-purple-900 to-purple-700">
          let's get cracking!
        </span>
      </p>

      <div className="flex justify-center gap-16 text-5xl text-gray-800 dark:text-lime-300/70">
        <a
          href="https://twitter.com/mcalderonbuono"
          rel="noreferrer noopener"
          target="_blank"
        >
          <AiFillTwitterCircle className="transform cursor-pointer hover:scale-110 active:scale-95 " />
        </a>
        <a
          href="https://www.linkedin.com/in/mcalderonbuono/"
          rel="noreferrer noopener"
          target="_blank"
        >
          <AiFillLinkedin className="transform cursor-pointer hover:scale-110 active:scale-95" />
        </a>
        <a
          href="https://github.com/maxiCalderonBuono"
          rel="noreferrer noopener"
          target="_blank"
        >
          <AiFillGithub className="transform cursor-pointer hover:scale-110 active:scale-95" />
        </a>
      </div>
    </motion.section>
  );
};

export default Hero;
