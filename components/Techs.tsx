'use client';
import Image from 'next/image';
import { HourglassBottom } from '@mui/icons-material';
import { services, servicesSoon } from '@/utils/servicesList';
import { motion, useAnimation, useInView } from 'framer-motion';
import SlideUp from '@/utils/SlideUp';
import { useEffect, useRef } from 'react';

const Techs = () => {
    const ref = useRef(null);
    const isInView = useInView(ref);
    const controls = useAnimation();
    useEffect(() => {
        if (isInView) {
            controls.start('visible');
        }
    }, [controls, isInView]);
    return (
        <section id="Skills" className="w-9/12 mx-auto pt-12 pb-10">
            <SlideUp>
                <h3 className="text-5xl pt-10 font-semibold text-center">
                    <span className="border-b-4 border-primary-main">Tech Stack</span>
                </h3>
                <div ref={ref} className="flex flex-wrap gap-20 items-center justify-center mt-20">
                    {services.map((item, index) => (
                        <motion.div
                            initial={{ y: -70, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5 * index }}
                            key={index}
                            className="flex flex-col items-center gap-2"
                        >
                            <div className="flex items-center justify-center h-20 w-20 rounded-lg p-2 text-white">
                                <Image src={item.icon} alt={item.title} width={64} />
                            </div>
                            <p className="text-xl font-semibold">{item.title}</p>
                        </motion.div>
                    ))}
                </div>
                {/* <h6 className="text-3xl pt-10 font-semibold text-center my-10">
                    Soon... <HourglassBottom className="text-3xl" />
                </h6>
                <div className="flex flex-wrap gap-20 items-center justify-center ">
                    {servicesSoon.map((item, index) => (
                        <div key={index} className="flex flex-col items-center gap-2">
                            <div className="flex items-center justify-center h-20 w-20 rounded-lg p-2 text-white">
                                <Image src={item.icon} alt={item.title} width={64} />
                            </div>
                            <p className="text-xl font-semibold">{item.title}</p>
                        </div>
                    ))}
                </div> */}
            </SlideUp>
        </section>
    );
};

export default Techs;
