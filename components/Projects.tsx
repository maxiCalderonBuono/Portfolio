import Image, { StaticImageData } from "next/image";
import React, { useRef, useEffect } from "react";

import { AiFillGithub } from "react-icons/ai";
import { IoMdOpen } from "react-icons/io";
import { PROJECTS } from "./utils/projects";
import { motion } from "framer-motion";
import gsap from "gsap";
import ScrollTringger from "gsap/dist/ScrollTrigger";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

interface Project {
  name: string;
  image: StaticImageData;
  description: string;
  tech: React.ReactNode[];
  deploy: string;
  repo: string;
}
// bg-gradient-to-b from-[#0E001C] to-[#28044d]

export const Projects = () => {
  return (
    <section className="w-full min-h-[calc(100vh-72px)]  md:pt-8 md:pb-16 bg-lime-100 ">
      <h3 className="flex items-center justify-center px-5 py-8 text-3xl font-bold text-transparent md:py-0 bg-clip-text bg-gradient-to-r from-green-500 to-cyan-500">
        PROJECTS
      </h3>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        className="md:h-[550px] mt-10 md:mt-0"
      >
        {PROJECTS.map((project: Project) => (
          <SwiperSlide>
            <motion.div
              initial={{ opacity: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1 }}
              className="flex flex-col items-center justify-center flex-1 h-full gap-10 px-5 md:gap-8 md:flex-row"
            >
              <div className="md:w-[600px] md:h-[350px] flex justify-center w-full h-[200px]">
                <Image
                  src={project.image}
                  alt={`screenshot from ${project.name} web`}
                  className="rounded-md object-fit"
                />
              </div>

              <div className="w-full space-y-5 md:w-1/3 md:text-left">
                <div className="flex flex-wrap justify-center gap-4 px-5">
                  {project.tech.map((logo: React.ReactNode) => (
                    <span className="w-10 h-10">{logo}</span>
                  ))}
                </div>
                <h4 className="text-3xl text-center md:text-4xl dark:text-white">
                  {project.name}
                </h4>
                <h3 className="text-center dark:text-white md:text-center">
                  {project.description}
                </h3>
                <div className="flex justify-center gap-4 mt-4 text-4xl dark:text-lime-100">
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
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

//
