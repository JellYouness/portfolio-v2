import { Speed, WbIncandescent, RocketLaunch, TouchApp } from '@mui/icons-material';
import Image from 'next/image';
import Link from 'next/link';
import SlideUp from '@/utils/SlideUp';

const AboutMe = [
    {
        title: 'Fast',
        description: 'Sites that load fast and keep users engaged.',
        icon: <Speed sx={{ fontSize: '60px' }} />
    },
    {
        title: 'Responsive',
        description: 'Flawless experience on every device, big or small.',
        icon: <WbIncandescent sx={{ fontSize: '60px' }} />
    },
    {
        title: 'Intuitive',
        description: 'Interfaces your customers actually enjoy using.',
        icon: <TouchApp sx={{ fontSize: '60px' }} />
    },
    {
        title: 'Dynamic',
        description: 'Modern, interactive experiences that stand out.',
        icon: <RocketLaunch sx={{ fontSize: '60px' }} />
    }
];

const About = () => {
    return (
        <section id="About" className="section w-9/12 mx-auto pt-12 pb-10">
            <h3 className="text-5xl pt-10 font-semibold text-center">
                <span className="border-b-4 border-primary-main">Why Work With Me</span>
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
                            src="/jellyouness.png"
                            width={208}
                            height={208}
                            className="w-52 h-52 rounded-full bg-primary-main border-4 border-gray-900 dark:border-white"
                            alt="Youness Jellouli"
                        />
                        <p className="text-xl font-bold text-primary-main border-b-2 border-primary-main">Your project partner</p>
                        <p className="text-base md:text-lg w-full md:w-8/12 text-center">
                            I&apos;m a full-stack developer based in Casablanca, working with businesses across Morocco and internationally.
                            I&apos;ve built platforms for healthcare, finance, real estate, and sports — from MVPs to production-ready SaaS.
                            I focus on clean design, solid engineering, and shipping on time.
                        </p>
                        <Link href="#Contact">
                            <p className="border-b-2 border-dashed border-primary-main hover:text-primary-main cursor-pointer">
                                Tell me about your project →
                            </p>
                        </Link>
                    </div>
                </div>
            </SlideUp>
        </section>
    );
};

export default About;
