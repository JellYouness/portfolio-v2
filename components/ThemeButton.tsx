'use client';
import React from 'react';
import { useTheme } from 'next-themes';
import { DarkMode, LightMode } from '@mui/icons-material';
import { motion } from 'framer-motion';

const ThemeButton = ({ index }: any | null) => {
    const { systemTheme, theme, setTheme } = useTheme();
    const currentTheme = theme === 'system' ? systemTheme : theme;

    return (
        <motion.button
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={index && { duration: 0.3 * index }}
            onClick={() => (theme == 'dark' ? setTheme('light') : setTheme('dark'))}
            className="hover:bg-gray-300 dark:bg-gray-800  dark:hover:bg-gray-700 transition-all rounded flex items-center justify-center h-7 w-7"
        >
            {currentTheme === 'dark' ? <DarkMode /> : <LightMode />}
        </motion.button>
    );
};

export default ThemeButton;
