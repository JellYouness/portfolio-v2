"use client";
import { motion, useInView } from "framer-motion";
import projects from "@/utils/projectsList";
import { GitHub, Language } from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import SlideUp from "@/utils/SlideUp";
import ProjectGallery from "./ProjectGallery";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  const [isOpen, setOpen] = useState(false);
  const onOpen = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
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
              transition={{ duration: 0.1, delay: index * 0.15 }}
              key={index}
              className="bg-gray-200 dark:bg-gray-800 rounded-lg shadow-lg p-4 relative hover:scale-[1.02] transition-all"
              onClick={onOpen}
            >
              <Image
                src={project.image}
                alt={project.title}
                placeholder="blur"
                loading="lazy"
                className="md:h-[170px] lg:h-[190px] 3xl:h-[245px] object-fill mb-4 rounded-lg border-2 border-gray-600 border-b-4"
              />
              <h4 className="text-xl text-black dark:text-white font-semibold mb-2">
                {project.title}
              </h4>
              <p className="text-gray-500 min-h-[150px] mb-4">{project.body}</p>
              <div className="flex gap-3 md:gap-4 items-center flex-wrap absolute bottom-4 left-4">
                {project.chips.map((chip, index) => (
                  <Image
                    key={index}
                    src={chip.img}
                    alt=""
                    loading="lazy"
                    className="w-9 hover:scale-110 transition-all"
                  />
                ))}
              </div>

              <div
                className={
                  project.images
                    ? "flex gap-1 absolute top-6 right-12 text-white"
                    : "flex gap-1 absolute top-6 right-6 text-white"
                }
              >
                {project.github && (
                  <Link
                    href={project.github}
                    target="_blank"
                    className="flex items-center justify-center p-2 bg-black rounded-full hover:scale-110 transition-all"
                  >
                    <GitHub className="text-2xl" />
                  </Link>
                )}
                {project.preview && (
                  <Link
                    href={project.preview}
                    target="_blank"
                    className="flex items-center justify-center p-2 bg-black rounded-full hover:scale-110 transition-all"
                  >
                    <Language className="text-2xl" />
                  </Link>
                )}
                {project.images && (
                  <ProjectGallery
                    title={project.title}
                    images={project.images}
                  />
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
