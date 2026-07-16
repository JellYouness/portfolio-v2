'use client';
import { ArrowDownward, GitHub, Instagram, LinkedIn } from '@mui/icons-material';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import Link from 'next/link';

const socials = [
    {
        link: 'https://github.com/JellYouness',
        icon: <GitHub className="text-3xl" />
    },
    {
        link: 'https://www.linkedin.com/in/youness-jellouli/',
        icon: <LinkedIn className="text-3xl" />
    },
    {
        link: 'https://www.instagram.com/yns_jell/',
        icon: <Instagram className="text-3xl" />
    }
];

const Hero = () => {
    return (
      <section id="Home">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col justify-center items-center gap-4 relative h-screen w-full"
        >
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Web Development Studio</p>
          <p className="text-5xl font-bold text-gradient text-center">Youness JELLOULI</p>
          <TypeAnimation
            sequence={[
              "Web Apps That Convert",
              1000,
              "SaaS & Business Platforms",
              1000,
              "Fast, Modern Websites",
              1000,
            ]}
            speed={50}
            repeat={Infinity}
            className="text-3xl md:text-4xl text-center"
          />
          <p className="text-xl sm:text-2xl sm:w-6/12 mx-3 text-center">
            I design and build high-performance web products for businesses — from landing pages to full SaaS platforms.
          </p>
          <div className="flex items-center gap-3 z-40">
            <Link href="#Contact">
              <button className="btn">
                Start a Project <ArrowDownward />
              </button>
            </Link>
            <Link href="#Projects">
              <button className="btn-bordered">
                View Client Work <ArrowDownward />
              </button>
            </Link>
          </div>
          <div className="flex justify-between items-center gap-2 dark:bg-white bg-gray-900 dark:text-gray-900 text-white rounded-full px-4 py-2">
            {socials.map((social, index) => (
              <Link
                key={index}
                href={social.link}
                target="_blank"
                className="hover:scale-110 transition"
              >
                {social.icon}
              </Link>
            ))}
          </div>
        </motion.div>
      </section>
    );
};

export default Hero;
