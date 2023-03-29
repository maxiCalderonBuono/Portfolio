import React from "react";
import { motion } from "framer-motion";
import { ChatBot } from "./ChatBot";

const Contact = () => {
  return (
    <section className="flex flex-col min-h-[calc(100vh-72px)]  items-center justify-evenly pt-5 max-w-full  mx-auto dark:bg-gradient-to-b dark:from-[#240345] dark:to-[#140920]">
      <p className="px-5 mb-3 text-lg font-bold text-center text-gray-700 md:text-2xl dark:text-white">
        Want to know more about me? Ask my personal assistant 🤖
      </p>
      <ChatBot initialMessage="Someone out there?" />
      <footer className="flex flex-col items-center justify-center gap-3 py-4 font-bold text-gray-800 dark:text-white">
        <p>Built with 💗 &amp; ☕️ &amp; 🧉 &amp; AI</p>
        <p className="text-sm dark:text-zinc-200 text-zinc-500">
          © 2023 Maxi Calderón. All rights reserved.
        </p>
      </footer>
    </section>
  );
};

export default Contact;
