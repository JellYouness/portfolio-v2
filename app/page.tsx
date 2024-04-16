import About from "@/components/About";
import Hero from "@/components/Hero";
import Techs from "@/components/Techs";
import { ArrowBack } from "@mui/icons-material";

const page = () => {
  return (
    <main>
      <Hero />
      <About />
      <Techs />
    </main>
  );
};

export default page;
