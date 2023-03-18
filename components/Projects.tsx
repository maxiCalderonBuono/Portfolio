import Image, { StaticImageData } from "next/image";
import React, { ReactElement } from "react";

import { AiFillGithub } from "react-icons/ai";
import { IoMdOpen } from "react-icons/io";
import { PROJECTS } from "./utils/projects";
import { motion } from "framer-motion";

interface Project {
  name: string;
  image: StaticImageData;
  description: string;
  tech: React.ReactNode[];
  deploy: string;
  repo: string;
}

export const Projects = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1 }}
      className="relative z-0 flex flex-col items-center h-screen max-w-full mx-auto overflow-hidden md:flex-row justify-evenly"
    >
      <h2 className="absolute py-2 text-3xl font-extrabold tracking-wide text-transparent top-28 bg-clip-text bg-gradient-to-r from-teal-500 to-teal-100">
        PROJECTS
      </h2>
      <div className="w-full absolute  top-[30%] left-0 h-[350px] bg-blue-500/25 -skew-y-12"></div>
      <div className="z-20 flex w-full pt-10 overflow-x-scroll overflow-y-hidden snap-x snap-mandatory">
        {PROJECTS.map((project: Project) => (
          <div className="flex flex-col items-center justify-center flex-shrink-0 w-screen h-screen p-5 space-y-5 md:p-20 snap-center">
            <motion.div
              initial={{ y: -300, opacity: 0 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <Image
                src={project.image}
                alt={`screenshot from ${project.name} web`}
                width={350}
                height={350}
              />
            </motion.div>
            {/* <div className="relative items-center justify-center overflow-hidden transition-shadow cursor-pointer group hover:shadow-xl hover:shadow-black/30">
              <Image
                src={project.image}
                alt={`screenshot from ${project.name} web`}
                className="object-cover w-full h-full transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125"
                width={350}
                height={350}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
              <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                <p className="mb-3 text-lg italic text-white transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                  {project.description}
                </p>
                <button className="px-4 py-2 ml-8 text-sm text-white rounded-md bg-gradient-to-r from-blue-500 to-cyan-500 hover:opacity-90">
                  See More
                </button>
              </div>
            </div> */}

            <div className="flex flex-col space-y-5">
              <div className="flex justify-center gap-4">
                {project.tech.map((logo: React.ReactNode) => (
                  <span className="w-10 h-10">{logo}</span>
                ))}
              </div>
              <h4 className="text-4xl text-center dark:text-white">
                {project.name}
              </h4>
              <h3 className="text-center dark:text-white md:text-left">
                {project.description}
              </h3>
              <div className="flex justify-center gap-4 mt-4 text-3xl dark:text-lime-100">
                <a
                  href={project.repo}
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  <AiFillGithub className="transform cursor-pointer hover:scale-105 active:scale-95" />
                </a>
                <a
                  href={project.deploy}
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  <IoMdOpen className="transform cursor-pointer hover:scale-105 active:scale-95" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
};
