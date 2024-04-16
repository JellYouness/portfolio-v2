import Image from "next/image";
import Logo from "@/assets/Logo.png";
import { GitHub, LinkedIn, Instagram } from "@mui/icons-material";
import ThemeButton from "./ThemeButton";

const navElements = [
  "Home",
  "About",
  "Services",
  "Experiences",
  "Projects",
  "Contact",
];

const NavBar = () => {
  return (
    <div className="bg-white dark:bg-gray-900 absolute fixed top-0 w-full z-50 flex justify-between items-center py-4 px-32 border-b-2 border-primary-main">
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
          <a
            href={`#${element}`}
            key={index}
            className="font-semibold text-lg mr-4 hover:text-primary-main transition-200"
          >
            {element}
          </a>
        ))}
        <ThemeButton />
      </div>
    </div>
  );
};

export default NavBar;
