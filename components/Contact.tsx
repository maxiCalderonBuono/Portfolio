import React from "react";
import { motion } from "framer-motion";
import { ChatBot } from "./ChatBot";

const Contact = () => {
  return (
    <section className="relative flex flex-col  items-center justify-end gap-12 h-screen max-w-full  mx-auto bg-gradient-to-b from-[#28044d] to-[#0E001C]">
      <p className="px-5 text-lg font-bold text-center text-gray-700 md:text-2xl dark:text-white">
        Want to know more about me? Ask my personal assistant 🤖
      </p>
      <ChatBot initialMessage="Someone out there?" />
      <footer className="flex justify-center py-4 font-bold text-gray-700 dark:text-white">
        Built with 💗 &amp; ☕️ &amp; 🧉 &amp; AI
      </footer>
    </section>
  );
};

export default Contact;
