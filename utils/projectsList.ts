// prettier-ignore
import pcc from "@/public/images/projects/pcc.png";
import tabibi from "@/public/images/projects/tabibi.png";
import istech from "@/public/images/projects/istech.png";
import digitalmind from "@/public/images/projects/digitalmind.png";
import stockmanager from "@/public/images/projects/stockmanager.png";
import portfolio1 from "@/public/images/projects/portfolio-v1.png";
import portfolio2 from "@/public/images/projects/portfolio-v2.png";
import sms from "@/public/images/projects/sms.png";
import educonnect from "@/public/images/projects/educonnect.png";
import creon from "@/public/images/projects/creon.png";
import ibc from "@/public/images/projects/ibc.png";
import wifina from "@/public/images/projects/wifina.png";
import travelFlow from "@/public/images/projects/travel-flow.png";
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
import typescript from "@/public/images/Typescript.svg";
import prisma from "@/public/images/prisma.svg";
import supabase from "@/public/images/supabase.png";
import redux from "@/public/images/redux.svg";
import framerMotion from "@/public/images/framer-motion.svg";
import google from "@/public/images/google.svg";
import python from "@/public/images/python.svg";
import tabibiGallery from "./projectsGallery/tabibiGallery";
import stockGallery from "./projectsGallery/stockGallery";

const projects = [
  {
    image: ibc,
    title: "IBC - Identification des besoins en competences",
    body: "A tool for employment and training stakeholders to better understand, anticipate and act on skills needs.",
    chips: [
      {
        img: nextjs,
      },
      {
        img: react,
      },
      {
        img: typescript,
      },
      {
        img: mui,
      },
    ],
  },
  {
    image: wifina,
    title: "Wifina",
    body: "fully digital platform that enables quick calculations of loan installments and interest, providing instant pre-approval responses through strategic banking partnerships.",
    chips: [
      {
        img: nextjs,
      },
      {
        img: react,
      },
      {
        img: laravel,
      },
      {
        img: typescript,
      },
      {
        img: mui,
      },
    ],
    preview: "https://wifina.be",
  },
  {
    image: travelFlow,
    title: "Travel Flow",
    body: "Smart and fast management of routes & The Traveling Salesman Problem (TSP).",
    chips: [
      {
        img: nextjs,
      },
      {
        img: react,
      },
      {
        img: mui,
      },
      {
        img: typescript,
      },
      {
        img: python,
      },
      {
        img: google,
      },
    ],
    preview: "https://travel-flow-tsp.vercel.app/",
    github: "https://github.com/JellYouness/travel-flow-tsp",
  },
  {
    image: educonnect,
    title: "EduConnect - SMS Landing Page",
    body: "A landing page for a School Management System web app which is Software As a Service(SaaS). showing the features and the pricing plans.",
    chips: [
      {
        img: nextjs,
      },
      {
        img: react,
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
    preview: "https://educonnect-blush.vercel.app/",
    //github: "https://github.com/JellYouness/educonnect",
  },
  {
    image: creon,
    title: "Creon AI - NFT Blockchain Platform",
    body: "A landing page for a NFT Blockchain Platform. clone of the website[creon.ai].",
    chips: [
      {
        img: nextjs,
      },
      {
        img: react,
      },
      {
        img: tailwind,
      },
      {
        img: typescript,
      },
    ],
    preview: "https://creon-nft-landing-page.vercel.app/",
    //github: "https://github.com/JellYouness/creon-nft-landing-page",
  },
  {
    image: tabibi,
    title: "Tabibi - Emergency Management",
    body: "Modern medical Web application for Emergency Management (TABIBI), presented as a final university studies project.",
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
    image: portfolio2,
    title: "Personal Portfolio v2",
    body: "In this version, I spotlight my adeptness in new technologies, enhancing performance, ensuring dynamic and efficient web interactions.",
    chips: [
      {
        img: nextjs,
      },
      {
        img: react,
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
    //github: "https://github.com/JellYouness/portfolio-v2",
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
    body: "Company stock management web application.",
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
    image: digitalmind,
    title: "Digital Mind Agency",
    body: 'A Static Website for an agency named "Digital Mind", showing their services and projects also the team members.',
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
    //github: "https://github.com/JellYouness/Digital-Mind-Agency",
  },
  {
    image: sms,
    title: "SMS - School Management System",
    body: "A School Management System for managing students, teachers, and classes. It's a work in progress.",
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
  {
    image: pcc,
    title: "PCC Membership management",
    body: "Gestion des membres et les abonnements de l'entreprise Palmeraie Country Club.",
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
    github: "https://github.com/JellYouness/Gestion-des-membres",
  },
];

export default projects;
