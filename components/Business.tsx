import Image from "next/image";
import React from "react";
import appone from "../public/images/app-1.png";
import apptwo from "../public/images/app-2.png";
import { BsPlayCircleFill } from "react-icons/bs";
import Link from "next/link";

const Business = () => {
  return (
    <section className="flex flex-col lg:flex-row min-h-[calc(100vh-72px)] h-[calc(100vh-72px)] items-center justify-center pt-5 max-w-full mx-auto dark:bg-gradient-to-b dark:from-[#140920] dark:to-[#240345] px-5 md:px-20">
      <div className="flex flex-col justify-center order-2 w-4/6 h-full space-y-5">
        <h3 className="flex items-center text-center  justify-center px-5 text-3xl font-extrabold text-transparent md:py-8 lg:py-0 bg-clip-text dark:bg-gradient-to-r dark:from-[#fff700] dark:to-indigo-200">
          DATALYCS
        </h3>
        <p className="text-xl italic font-bold dark:text-white">
          Introducing the ultimate solution for Covid-19 data management
        </p>
        <p className="pr-12 dark:text-gray-200 opacity-80">
          Developed from scratch alongside one of my best friends, our app was
          designed to streamline data collection and management, making it
          easier than ever to keep track of critical information related to
          Covid-19.
        </p>
        <p className="text-lg text-transparent bg-clip-text bg-gradient-to-r dark:from-green-500 dark:to-cyan-500 from-purple-900 to-purple-700">
          On the news!
        </p>
        <div className="flex flex-col max-w-4xl gap-8 text-center md:flex-row group">
          <div className="flex w-full md:max-w-[270px] flex-col justify-between p-8 bg-white/10 group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] hover:!scale-100  bg-opacity-20 rounded-xl mix-blend-luminosity">
            <h4 className="text-3xl font-bold uppercase">Mdz News</h4>
            <p className="my-3 text-sm font-light leading-7 text-left opacity-50">
              Mendocinos created an app to register the entry and exit of people
              in the midst of a pandemic
            </p>
            <Link
              href="https://www.mdzol.com/sociedad/2020/7/20/mendocinos-crearon-una-app-para-registrar-el-ingreso-egreso-de-personas-en-plena-pandemia-93088.html"
              rel="noreferrer noopener"
              target="_blank"
              className="py-2.5 px-8 rounded-full bg-indigo-600"
            >
              Read
            </Link>
          </div>
          <div className="flex w-full md:max-w-[270px] flex-col justify-between p-8 bg-white/10 group-hover:blur-sm hover:!blur-none group-hover:scale-[0.85] bg-opacity-20 hover:!scale-100  rounded-xl mix-blend-luminosity">
            <h4 className="text-3xl font-bold uppercase">Los Andes</h4>
            <p className="my-3 text-sm font-light leading-7 text-left opacity-50">
              Control Access Made Easy: Discover How the Mendoza App Regulates
              Entry into Local Establishments
            </p>
            <Link
              href="https://www.losandes.com.ar/economia/como-funciona-la-app-mendocina-para-controlar-el-ingreso-de-personas-a-locales-y-establecimientos/"
              rel="noreferrer noopener"
              target="_blank"
              className="py-2.5 px-8 rounded-full bg-indigo-600"
            >
              Read
            </Link>
          </div>

          <div className="flex w-full md:max-w-[270px] flex-col justify-between p-8 bg-white/10 relative group-hover:blur-sm hover:!blur-none bg-opacity-20 group-hover:scale-[0.85] hover:!scale-100 rounded-xl mix-blend-luminosity">
            <h4 className="text-3xl font-bold uppercase">Memo</h4>
            <p className="my-3 text-sm font-light leading-7 text-left opacity-50">
              Fight against COVID-19: Learn how mendocinian technologies are
              making a difference
            </p>
            <Link
              href="https://www.memo.com.ar/salud/en-vivo-tecnologias-mendocinas-contra-la-pandemia-de-covid-19/"
              rel="noreferrer noopener"
              target="_blank"
              className="py-2.5 px-8 rounded-full bg-indigo-600"
            >
              Read
            </Link>
          </div>
        </div>
      </div>
      <div className="relative w-2/6 h-full">
        <Link
          href="https://www.youtube.com/watch?v=XZMlZ50xacY"
          rel="noreferrer noopener"
          target="_blank"
          className="absolute z-20 top-1/3 right-12"
        >
          <div className="absolute rounded-full -inset-0.5 dark:bg-gradient-to-r dark:from-pink-500 dark:to-lime-500 animate-pulse blur-md"></div>
          <BsPlayCircleFill className="relative text-6xl text-black bg-white border-none rounded-full" />
        </Link>

        <div className="absolute top-0 -left-10 md:w-[600px] md:h-[500px] flex justify-center w-full  sm:h-[300px] sm:w-[550px] md:px-5 lg:w-[600px]">
          <div>
            <Image
              src={appone}
              alt={`screenshot from web`}
              className="relative rounded-md object-fit"
            />
          </div>
        </div>
        <div className=" absolute z-10 top-32 -left-48 md:w-[600px] md:h-[500px] flex justify-center w-full  sm:h-[300px] sm:w-[550px] md:px-5 lg:w-[600px]">
          <Image
            src={apptwo}
            alt={`screenshot from web`}
            className="rounded-md object-fit"
          />
        </div>
      </div>
    </section>
  );
};

export default Business;
