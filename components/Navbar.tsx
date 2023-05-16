import React from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";

import { motion } from "framer-motion";
import Link from "next/link";

const Navbar = ({ setter }) => {
  return (
    <header className="sticky top-0 z-20 flex justify-center w-full px-5 backdrop-blur-md ">
      <nav className="flex justify-between w-full pt-8 pb-2 max-w-7xl ">
        <Link
          href="#hero"
          className="transform hover:scale-110 active:scale-95"
        >
          <motion.h1
            initial={{ y: "100%", opacity: 0, scale: 0.4 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="flex gap-1 text-2xl font-bold text-gray-900 dark:text-white "
          >
            <span className="text-yellow-500">{"<"}</span>MaxCal
            <span className="text-blue-500">{"/"}</span>
            <span className="text-yellow-500">{">"}</span>
          </motion.h1>
        </Link>
        <motion.ul
          className="flex items-center"
          initial={{ y: "100%", opacity: 0, scale: 0.4 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
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
              href="/data/maximilianoCalderonDeveloper.pdf"
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
