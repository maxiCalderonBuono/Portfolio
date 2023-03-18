import React from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import Card from "./Card";
import { motion } from "framer-motion";

const Navbar = ({ setter }) => {
  return (
    <header className="sticky top-0 z-20 px-5 mx-auto max-w-7xl">
      <nav className="flex justify-between py-10 ">
        <motion.h1
          initial={{ x: -500, opacity: 0, scale: 0.4 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1.3 }}
          className="flex gap-1 text-2xl font-bold text-gray-900 dark:text-white"
        >
          <span className="text-yellow-500">{"<"}</span>maxcal
          <span className="text-blue-500">{"/"}</span>
          <span className="text-yellow-500">{">"}</span>
        </motion.h1>
        <motion.ul
          className="flex items-center"
          initial={{ x: 500, opacity: 0, scale: 0.4 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
        >
          <li className="text-gray-900 transform hover:scale-105 active:scale-95 dark:text-white">
            <BsFillMoonStarsFill
              onClick={() => setter()}
              className="text-2xl cursor-pointer"
            />
          </li>
          <li className="transform hover:scale-105 active:scale-95">
            <a
              href="/data/maximilianoCalderónDeveloper.pdf"
              download="Maximiliano Calderón"
              className="px-4 py-2 ml-8 text-white rounded-md bg-gradient-to-r from-blue-500 to-cyan-500 hover:opacity-90 "
            >
              Resume
            </a>
          </li>

          {/* <Card /> */}
        </motion.ul>
      </nav>
    </header>
  );
};

export default Navbar;