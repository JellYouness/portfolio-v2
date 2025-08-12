"use client";
import { motion, useInView } from "framer-motion";
import projects from "@/utils/projectsList";
import { filterServices } from "@/utils/servicesList";
import { GitHub, Language } from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import SlideUp from "@/utils/SlideUp";
import ProjectGallery from "./ProjectGallery";
import { Hourglass } from "lucide-react";

interface Service {
  icon: string;
  title: string;
}

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [selectedServices, setSelectedServices] = useState<Service[]>([]);

  const handleServicesSelect = (service: Service) => {
    if (selectedServices.includes(service)) {
      setSelectedServices(selectedServices.filter((s) => s !== service));
    } else {
      setSelectedServices([...selectedServices, service]);
    }
  };

  useEffect(() => {
    if (selectedServices.length === 0) {
      setFilteredProjects(projects);
    } else {
      const filtered = projects.filter((project) =>
        project.chips.some((chip) =>
          selectedServices.some((service) => chip.img === service.icon)
        )
      );
      setFilteredProjects(filtered);
    }
  }, [selectedServices]);

  return (
    <section id="Projects" className="w-9/12 mx-auto pt-12 pb-10">
      <SlideUp>
        <h3 className="text-5xl py-10 font-semibold text-center">
          <span className="border-b-4 border-primary-main">My Work</span>
        </h3>
        <div>
          <p className="text-center text-lg mb-4">Filters:</p>
          <div className="flex justify-center items-center gap-6 mb-4 flex-wrap">
            {filterServices.map((service, index) => (
              <Image
                key={index}
                src={service.icon}
                alt={service.title}
                loading="lazy"
                className={`size-10 inline-block ${
                  selectedServices.includes(service)
                    ? "opacity-100"
                    : "opacity-40"
                } hover:opacity-100 hover:scale-110 transition-all cursor-pointer`}
                onClick={() => {
                  handleServicesSelect(service);
                }}
              />
            ))}
          </div>
          <div className="flex justify-center items-center gap-6 mb-8 flex-wrap">
            {selectedServices.length > 0 && (
              <button
                className="bg-red-500 text-white text-sm px-2 py-1 rounded-lg hover:bg-red-600 transition-all"
                onClick={() => setSelectedServices([])}
              >
                Clear Filters
              </button>
            )}
          </div>
        </div>
        {filteredProjects.length > 0 ? (
          <div
            ref={ref}
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                variants={cardVariants}
                initial="initial"
                animate={isInView ? "animate" : "initial"}
                transition={{ duration: 0.1, delay: index * 0.15 }}
                key={index}
                className="bg-gray-200 dark:bg-gray-800 rounded-lg shadow-lg p-4 relative hover:scale-[1.02] transition-all"
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
                <p className="text-gray-500 min-h-[200px] md:min-h-[170px] mb-4">
                  {project.body}
                </p>
                {project.year && (
                  <p className="text-gray-400 text-sm absolute bottom-14 left-4 flex items-center gap-2">
                    Created in: {project.year}
                    {project.inProgress && (
                      <span className="bg-primary-main text-white px-1.5 py-0.5 rounded-full text-xs flex items-center gap-1 ">
                        <Hourglass className="size-3" />
                        In Progress
                      </span>
                    )}
                  </p>
                )}
                <div className="flex gap-3 md:gap-4 items-center flex-wrap absolute bottom-4 left-4">
                  {project.chips.map((chip, index) => (
                    <Image
                      key={index}
                      src={chip.img}
                      alt=""
                      loading="lazy"
                      className="w-[30px] hover:scale-110 transition-all"
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
        ) : (
          <div className="col-span-3 text-center text-xl mt-8">
            No projects found for the selected filters.
          </div>
        )}
      </SlideUp>
    </section>
  );
};

export default Projects;
