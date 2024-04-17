"use client";
import Image from "next/image";
import Logo from "@/assets/Logo.png";
import { GitHub, LinkedIn, Instagram } from "@mui/icons-material";
import ThemeButton from "./ThemeButton";
import { motion } from "framer-motion";

const navElements = [
  "Home",
  "About",
  "Skills",
  // "Experiences",
  "Projects",
  "Contact",
];

const NavBar = () => {
  return (
    <div className="bg-white dark:bg-gray-900 fixed top-0 w-full z-50 flex justify-between items-center py-4 px-32 border-b-2 border-primary-main">
      <div className="flex items-center gap-3">
        <Image
          src={Logo}
          alt="Jellouli Youness"
          quality={100}
          placeholder="blur"
          width={50}
          height={50}
        />
        <p className="font-semibold text-xl">Youness JELLOULI</p>
      </div>
      <div className="flex justify-between items-center gap-8">
        {navElements.map((element, index) => (
          <motion.a
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3 * index }}
            href={`#${element}`}
            key={index}
            className="font-semibold text-lg mr-4 hover:text-primary-main transition-200"
          >
            {element}
          </motion.a>
        ))}
        <ThemeButton index={navElements.length} />
      </div>
    </div>
  );
};

export default NavBar;
