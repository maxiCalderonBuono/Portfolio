import Image from "next/image";
import React from "react";
import app from "../public/images/app.png";
import { BsFillPlayFill } from "react-icons/bs";
import Link from "next/link";

const Business = () => {
  return (
    <section className="flex flex-col lg:flex-row min-h-[calc(100vh-72px)] md:h-[calc(100vh-72px)] items-center justify-center  pt-5 max-w-full mx-auto dark:bg-gradient-to-b dark:from-[#140920] dark:to-[#240345] px-5 md:px-20 ">
      <div className="flex flex-col items-center justify-center order-2 h-full px-2 space-y-10 md:w-1/2 md:items-start lg:pr-8 lg:mb-20">
        <h3 className="text-center md:text-left text-5xl font-extrabold text-transparent md:py-8 lg:py-0 bg-clip-text dark:bg-gradient-to-r dark:from-[#fff700] dark:to-indigo-400">
          DATALYCS
        </h3>

        <p className="text-xl italic font-bold text-center md:text-left dark:text-white">
          Introducing the ultimate solution for Covid-19 data management
        </p>
        <p className="text-center dark:text-gray-200 opacity-80 md:text-left">
          Developed from scratch alongside one of my best friends, our app was
          designed to streamline data collection and management, making it
          easier than ever to keep track of critical information related to
          Covid-19.
        </p>
        <Link
          href="https://www.youtube.com/watch?v=XZMlZ50xacY"
          rel="noreferrer noopener"
          target="_blank"
          className="relative w-2/3 md:w-1/2"
        >
          <div className="absolute rounded-full -inset-0.5 dark:bg-gradient-to-r dark:from-pink-500 dark:to-lime-500 animate-pulse blur-md"></div>
          <div className="relative flex items-center justify-center w-full px-5 py-3 text-2xl text-white bg-black border-none rounded-full">
            Watch video <BsFillPlayFill />
          </div>
        </Link>
      </div>
      <div className="flex items-start justify-center h-full mb-4 md:mb-0 md:justify-center md:w-1/2">
        <div className="md:w-[600px] md:h-[500px] flex justify-center items-center w-full  sm:h-[300px] sm:w-[550px]  lg:w-[400px]">
          <Image
            src={app}
            alt={`screenshot from web`}
            className="rounded-md object-fit"
          />
        </div>
      </div>
    </section>
  );
};

export default Business;
