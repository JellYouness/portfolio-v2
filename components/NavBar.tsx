'use client';
import Image from 'next/image';
import Logo from '@/assets/Logo.png';
import { Menu, Close } from '@mui/icons-material';
import ThemeButton from './ThemeButton';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';

const navElements = [
    'Home',
    'About',
    'Skills',
    // "Experiences",
    'Projects',
    'Contact'
];

const NavBar = () => {
    const [active, setActive] = useState('Home');
    const [toggle, setToggle] = useState(false);
    return (
        <nav className="bg-white dark:bg-gray-900 fixed top-0 w-full z-50 flex justify-between items-center py-4 px-5 lg:px-14 xl:px-32 border-b-2 border-primary-main">
            <div className="flex items-center gap-3">
                <Image src={Logo} alt="Jellouli Youness" quality={100} placeholder="blur" width={50} height={50} />
                <p className="font-semibold text-xl">Youness JELLOULI</p>
            </div>
            <div className="md:flex hidden justify-between items-center gap-8">
                {navElements.map((element, index) => (
                    <motion.a
                        initial={{ y: -50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.3 * index }}
                        href={`#${element}`}
                        key={index}
                        className="font-semibold text-lg mr-4 hover:text-primary-main transition-200"
                    >
                        {element}
                    </motion.a>
                ))}
                <ThemeButton index={navElements.length} />
            </div>
            <div className="md:hidden flex items-center transition-all delay-1000">
                {toggle ? (
                    <Close className="w-[28px] h-[28px] object-contain" onClick={() => setToggle(!toggle)} />
                ) : (
                    <Menu className="w-[28px] h-[28px] object-contain" onClick={() => setToggle(!toggle)} />
                )}
                <div
                    className={`${
                        !toggle ? 'hidden' : 'flex'
                    } p-6 bg-white dark:bg-gray-900 absolute top-20 right-0 mx-4 my-2 min-w-[160px] rounded-xl border-2 dark:border-white border-gray-900 animate-slide-top`}
                >
                    <ul className="list-none flex justify-end items-center flex-1 flex-col">
                        {navElements.map((element, index) => (
                            <li key={index} className={`text-xl cursor-pointer ${index === navElements.length - 1 ? 'mb-4' : 'mb-8'}`}>
                                <Link href={`#${element}`}>{element}</Link>
                            </li>
                        ))}
                        <li className="mt-4">
                            <ThemeButton />
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
