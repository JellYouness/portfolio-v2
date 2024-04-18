import { Speed, WbIncandescent, RocketLaunch } from '@mui/icons-material';
import Image from 'next/image';
import Photo from '@/assets/mypic.png';
import Link from 'next/link';
import SlideUp from '@/utils/SlideUp';

const AboutMe = [
    {
        title: 'Fast',
        description: 'Fast load times and lag free interaction, my highest priority.',
        icon: <Speed sx={{ fontSize: '60px' }} />
    },
    {
        title: 'Responsive',
        description: 'My layouts will work on any device, big or small.',
        icon: <WbIncandescent sx={{ fontSize: '60px' }} />
    },
    {
        title: 'Intuitive',
        description: 'Strong preference for easy to use, intuitive UX/UI.',
        icon: <WbIncandescent sx={{ fontSize: '60px' }} />
    },
    {
        title: 'Dynamic',
        description: "Websites don't have to be static, I love making pages come to life.",
        icon: <RocketLaunch sx={{ fontSize: '60px' }} />
    }
];

const Info = [
    {
        title: 'Name:',
        description: 'Youness JELLOULI'
    },
    {
        title: 'Email:',
        description: 'younessjellouli12@gmail.com'
    },
    {
        title: 'Date of birth:',
        description: '21 April 2002 (22 Years Old)'
    },
    {
        title: 'From:',
        description: 'Casablanca, Morocco'
    }
];

const About = () => {
    return (
        <section id="About" className="section w-9/12 mx-auto pt-12 pb-10">
            <h3 className="text-5xl pt-10 font-semibold text-center">
                <span className="border-b-4 border-primary-main">About Me</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 items-center py-20 gap-y-10 xl:gap-0">
                {AboutMe.map((item, index) => (
                    <SlideUp index={index} key={index}>
                        <div className="flex flex-col items-center gap-2 ">
                            <div className="flex items-center justify-center w-24 h-24 rounded-full bg-primary-main text-white">
                                {item.icon}
                            </div>
                            <p className="text-2xl font-semibold">{item.title}</p>
                            <p className="text-base text-gray-500 w-60 text-center">{item.description}</p>
                        </div>
                    </SlideUp>
                ))}
            </div>
            <SlideUp>
                <div className="flex items-center justify-between mt-4">
                    <div className="flex flex-col items-center gap-6 md:gap-4 mx-auto">
                        <Image
                            src={Photo}
                            className="w-52 h-52 rounded-full bg-primary-main border-4 border-gray-900 dark:border-white"
                            alt="Youness Jellouli"
                        />
                        <p className="text-xl font-bold text-primary-main border-b-2 border-primary-main ">Who's this guy?</p>
                        <p className="text-base md:text-lg w-full md:w-8/12 text-center">
                            I'm an avid Front-End Developer deeply passionate about web technologies. I have serious passion for UI effects,
                            animations and creating intuitive, dynamic user experiences.
                        </p>
                        <Link href="#Contact">
                            <p className="border-b-2 border-dashed border-primary-main hover:text-primary-main cursor-pointer">
                                Let's make something special.
                            </p>
                        </Link>
                    </div>

                    {/* <div className="flex flex-col gap-8 items-center">
          <div className="flex items-center bg-primary-main rounded-full h-14 w-14 text-center">
            <p className="text-9xl">2</p>
          </div>
          <p className="text-xl">Years of Experience</p>
        </div> */}
                </div>
            </SlideUp>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 items-center justify-between justify-items-center py-20 gap-y-6 md:gap-y-10  xl:gap-0">
                {Info.map((item, index) => (
                    <SlideUp index={index} reverse>
                        <div className="flex flex-col items-center md:items-start gap-2">
                            <p className="text-base text-gray-400 dark:text-gray-400 ">{item.title}</p>
                            <p className="text-lg">{item.description}</p>
                        </div>
                    </SlideUp>
                ))}
            </div>
        </section>
    );
};

export default About;
