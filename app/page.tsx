import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Process from '@/components/Process';
import Projects from '@/components/Projects';
import Services from '@/components/Services';
import Techs from '@/components/Techs';

const page = () => {
    return (
        <main>
            <Hero />
            <Services />
            <About />
            <Projects />
            <Process />
            <Techs />
            <Contact />
            <Footer />
        </main>
    );
};

export default page;
