"use client";
import { motion, useInView } from "framer-motion";
import projects from "@/utils/projectsList";
import { GitHub, Language } from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import SlideUp from "@/utils/SlideUp";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="Projects" className="w-9/12 mx-auto pt-12 pb-10">
      <SlideUp>
        <h3 className="text-5xl py-10 font-semibold text-center">
          <span className="border-b-4 border-primary-main">My Work</span>
        </h3>
        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8"
        >
          {projects.map((project, index) => (
            <motion.div
              variants={cardVariants}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              transition={{ duration: 0.1, delay: index * 0.4 }}
              key={index}
              className="bg-gray-200 dark:bg-gray-800 rounded-lg shadow-lg p-4 relative hover:scale-[1.02] transition-all delay-100"
            >
              <Image
                src={project.image}
                alt={project.title}
                placeholder="blur"
                loading="lazy"
                className="w-full h-52 object-cover mb-4 rounded-lg border-2 border-gray-600 border-b-4"
              />
              <h4 className="text-xl text-black dark:text-white font-semibold mb-2">
                {project.title}
              </h4>
              <p className="text-gray-500 min-h-[120px] mb-4">{project.body}</p>
              <div className="flex gap-3 md:gap-4 items-center flex-wrap">
                {project.chips.map((chip, index) => (
                  <Image
                    key={index}
                    src={chip.img}
                    alt=""
                    loading="lazy"
                    className="w-9 hover:scale-110 transition-all delay-100"
                  />
                ))}
              </div>
              <div className="flex gap-1 absolute top-6 right-6 text-white">
                <Link
                  href={project.github}
                  target="_blank"
                  className="flex items-center justify-center p-2 bg-black rounded-full hover:scale-110 transition-all delay-100"
                >
                  <GitHub className="text-2xl" />
                </Link>
                {project.preview && (
                  <Link
                    href={project.preview}
                    target="_blank"
                    className="flex items-center justify-center p-2 bg-black rounded-full hover:scale-110 transition-all delay-100"
                  >
                    <Language className="text-2xl" />
                  </Link>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </SlideUp>
    </section>
  );
};

export default Projects;
