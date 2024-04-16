import About from "@/components/About";
import Hero from "@/components/Hero";
import { Projects } from "@/components/Projects";
import Techs from "@/components/Techs";
import { ArrowBack } from "@mui/icons-material";

const page = () => {
  return (
    <main>
      <Hero />
      <About />
      <Techs />
      <Projects />
    </main>
  );
};

export default page;
