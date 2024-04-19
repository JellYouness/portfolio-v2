import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Techs from '@/components/Techs';

const page = () => {
    return (
        <main>
            <Hero />
            <About />
            <Techs />
            <Projects />
            <Contact />
        <Footer />
        {
          // TODO: Add a poppup for the github star
        }
        </main>
    );
};

export default page;
