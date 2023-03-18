import { motion } from "framer-motion";
import React from "react";

const Circles = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{ duration: 2.5 }}
      className="relative flex items-center justify-center"
    >
      <div className="absolute border dark:border-gray-800  rounded-full h-[200px] w-[200px] animate-ping mt-52"></div>
      <div className="absolute border dark:border-gray-800  rounded-full h-[300px] w-[300px]  mt-52"></div>
      <div className="absolute border dark:border-gray-800  rounded-full h-[500px] w-[500px]  mt-52"></div>
      <div className="absolute border dark:border-yellow-800  rounded-full opacity-20 h-[650px] w-[650px] animate-pulse mt-52"></div>
      <div className="absolute border dark:border-gray-800  rounded-full h-[800px] w-[800px] mt-52"></div>
    </motion.div>
  );
};

export default Circles;
