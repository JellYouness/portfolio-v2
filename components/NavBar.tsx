import Image from "next/image";
import Logo from "@/assets/Logo.png";
import { GitHub, LinkedIn, Instagram } from "@mui/icons-material";

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
    <div className="flex justify-between items-center py-4 px-32 bg-gray-800">
      <div className="flex items-center gap-3">
        <Image
          src={Logo}
          alt="Jellouli Youness"
          quality={100}
          placeholder="blur"
          width={50}
          height={50}
        />
        <p className="text-white font-semibold text-xl">Youness JELLOULI</p>
      </div>
      <div className="flex justify-between items-center gap-8">
        {navElements.map((element, index) => (
          <a
            href={`#${element}`}
            key={index}
            className="text-white font-semibold text-lg mr-4 hover:text-primary-main transition-200"
          >
            {element}
          </a>
        ))}
      </div>
      {/* <div className="flex justify-between items-center gap-1">
        <a href="https://github.com/JellYouness">
          <GitHub className="text-2xl text-white underline hover:scale-110 hover:transition-200" />
        </a>
        <a href="https://www.linkedin.com/in/youness-jellouli/">
          <LinkedIn className="text-2xl text-white underline hover:scale-110 hover:transition-200" />
        </a>
        <a href="https://www.instagram.com/yns_jell/">
          <Instagram className="text-2xl text-white underline hover:scale-110 hover:transition-200" />
        </a>
      </div> */}
    </div>
  );
};

export default NavBar;
