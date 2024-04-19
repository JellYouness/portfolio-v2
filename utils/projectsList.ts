// prettier-ignore
import pcc from "@/public/images/projects/pcc.png";
import tabibi from "@/public/images/projects/tabibi.png";
import istech from "@/public/images/projects/istech.png";
import digitalmind from "@/public/images/projects/digitalmind.png";
import stockmanager from "@/public/images/projects/stockmanager.png";
import portfolio1 from "@/public/images/projects/portfolio-v1.png";
import portfolio2 from "@/public/images/projects/portfolio-v2.png";
import sms from "@/public/images/projects/sms.png";
////
import bootstrap from "@/public/images/bootstrap.svg";
import css from "@/public/images/css.svg";
import figma from "@/public/images/figma.svg";
import github from "@/public/images/github.svg";
import html from "@/public/images/html.svg";
import js from "@/public/images/js.svg";
import laravel from "@/public/images/laravel.svg";
import mysql from "@/public/images/mysql.svg";
import php from "@/public/images/php.svg";
import tailwind from "@/public/images/tailwind.svg";
import vscode from "@/public/images/vscode.svg";
import react from "@/public/images/react.svg";
import mui from "@/public/images/mui.svg";
import nextjs from "@/public/images/nextjs-icon.svg";
import mongodb from "@/public/images/mongodb.svg";
import typescript from "@/public/images/typescript.svg";
import prisma from "@/public/images/prisma.svg";
import supabase from "@/public/images/supabase.png";
import redux from "@/public/images/redux.svg";
import framerMotion from "@/public/images/framer-motion.svg";
import tabibiGallery from "./projectsGallery/tabibiGallery";
import stockGallery from "./projectsGallery/stockGallery";

const projects = [
  {
    image: tabibi,
    title: "Tabibi - Gestion des Urgences",
    body: "Design and Development of a modern medical Web application for Emergency Management (TABIBI), presented as a final university studies project.",
    chips: [
      {
        img: react,
      },
      {
        img: mui,
      },
      {
        img: redux,
      },
      {
        img: laravel,
      },
      {
        img: mysql,
      },
    ],
    images: tabibiGallery,
    github: "https://github.com/JellYouness/Tabibi",
  },
  {
    image: digitalmind,
    title: "Digital Mind Agency",
    body: ' A Static Website for an agency named "Digital Mind", showing their services and projects also the team members. Made with Html, Css and JavaScript.',
    chips: [
      {
        img: html,
      },
      {
        img: css,
      },
      {
        img: bootstrap,
      },
      {
        img: js,
      },
    ],
    preview: "https://jellyouness.github.io/Digital-Mind-Agency/",
    github: "https://github.com/JellYouness/Digital-Mind-Agency",
  },
  {
    image: portfolio2,
    title: "Personal Portfolio v2",
    body: "In this version, I spotlight my adeptness in Next.js, TypeScript, and Tailwind CSS, harnessing their features for server-side rendering (SSR) to manage intricate tasks and enhance performance, ensuring dynamic and efficient web interactions.",
    chips: [
      {
        img: nextjs,
      },
      {
        img: tailwind,
      },
      {
        img: typescript,
      },
      {
        img: framerMotion,
      },
    ],
    preview: "https://jellyouness.me",
    github: "https://github.com/JellYouness/portfolio-v2",
  },
  {
    image: portfolio1,
    title: "Personal Portfolio v1 (Old)",
    body: "In my portfolio, I've demonstrated expertise in ReactJs, Material UI, and solving complex challenges. I've optimized performance, ensuring efficient web experiences.",
    chips: [
      {
        img: react,
      },
      {
        img: mui,
      },
      {
        img: js,
      },
      {
        img: framerMotion,
      },
    ],
    preview: "https://jellyouness.vercel.app",
    github: "https://github.com/JellYouness/portfolio",
  },
  {
    image: stockmanager,
    title: "OPTIM'STOCK - Stock Manager",
    body: "Design and development of a company stock management web application.",
    chips: [
      {
        img: html,
      },
      {
        img: css,
      },
      {
        img: bootstrap,
      },
      {
        img: js,
      },
      {
        img: php,
      },
      {
        img: mysql,
      },
    ],
    images: stockGallery,
    github: "https://github.com/JellYouness/Stock-Management",
  },
  {
    image: sms,
    title: "SMS - School Management System",
    body: "**(Not Full still in progress)** \n A School Management System for managing students, teachers, and classes. It's a work in progress.",
    chips: [
      {
        img: react,
      },
      {
        img: mui,
      },
      {
        img: redux,
      },
      {
        img: js,
      },
    ],
    preview: "https://ihei.vercel.app",
    // github: "https://github.com/JellYouness/Club-Manager",
  },
  /*{
        image: pcc,
        title: 'PCC Membership management',
        body: "Conception et réalisation d'une application web pour la gestion des membres et les abonnements de l'entreprise Palmeraie Country Club.",
        chips: [
            {
                img: html
            },
            {
                img: css
            },
            {
                img: bootstrap
            },
            {
                img: js
            },
            {
                img: php
            },
            {
                img: mysql
            }
        ],
        github: 'https://github.com/JellYouness/Gestion-des-membres'
    }*/
];

export default projects;
