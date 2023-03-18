import React from "react";
import { motion } from "framer-motion";
import { ChatBot } from "./ChatBot";

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1 }}
      className="relative z-0 flex flex-col items-center justify-center h-screen max-w-full mx-auto overflow-hidden"
    >
      <p className="p-5 py-4 text-2xl font-bold text-center text-gray-700 dark:text-white">
        Want to know more about me? Ask my personal assistant 🤖
      </p>
      <ChatBot initialMessage="Someone out there?" />
      <footer className="flex justify-center py-4 font-bold text-gray-700 dark:text-white">
        Built with 💗 &amp; ☕️ &amp; 🧉 &amp; AI
      </footer>
    </motion.section>
  );
};

export default Contact;
