import Image, { StaticImageData } from "next/image";
import React, { useRef, useEffect } from "react";

import { AiFillGithub } from "react-icons/ai";
import { IoMdOpen } from "react-icons/io";
import { PROJECTS } from "./utils/projects";
import { motion } from "framer-motion";
import gsap from "gsap";
import ScrollTringger from "gsap/dist/ScrollTrigger";

interface Project {
  name: string;
  image: StaticImageData;
  description: string;
  tech: React.ReactNode[];
  deploy: string;
  repo: string;
}

gsap.registerPlugin(ScrollTringger);

export const Projects = () => {
  const scroller = useRef(null);

  useEffect(() => {
    let skillSet = gsap.utils.toArray(".skill-set");

    let to = gsap.to(skillSet, {
      xPercent: () => -100 * (skillSet.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: scroller.current,
        markers: false,
        pin: true,
        pinSpacing: true,
        scrub: 0,
        invalidateOnRefresh: true,
        anticipatePin: 0,
        snap: 1 / (skillSet.length - 1),

        end: () => "+=" + scroller.current.offsetWidth,
      },
    });

    return () => {
      to.kill();
    };
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#0E001C] to-[#28044d]">
      <div
        id="skills"
        ref={scroller}
        className=" flex  overflow-x-hidden text-white w-[900vw] m-0  relative h-screen"
      >
        <h3 className="absolute px-5 text-3xl font-bold text-transparent top-24 bg-clip-text bg-gradient-to-r from-green-500 to-cyan-500">
          PROJECTS
        </h3>

        {PROJECTS.map((project: Project) => (
          <section className="z-50 flex items-center justify-center w-screen h-full gap-10 px-12 bg-transparent skill-set ns-horizontal-section__item">
            <motion.div
              initial={{ y: -300, opacity: 0 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <Image
                src={project.image}
                alt={`screenshot from ${project.name} web`}
                width={600}
                height={600}
              />
            </motion.div>

            <div className="flex flex-col space-y-5 md:text-left">
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
          </section>
        ))}
      </div>
    </section>
  );
};

//
