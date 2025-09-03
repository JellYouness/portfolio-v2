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
import prisma from "@/public/images/prisma.svg";
import supabase from "@/public/images/supabase.png";
import ts from "@/public/images/Typescript.svg";
import redux from "@/public/images/redux.svg";
import vercel from "@/public/images/vercel.svg";
import framerMotion from "@/public/images/framer-motion.svg";
import python from "@/public/images/python.svg";
import google from "@/public/images/google.svg";
import reactNative from "@/public/images/react-native.png";

export const services = [
  {
    id: "nextjs",
    icon: nextjs,
    title: "Next Js",
  },
  {
    id: "react",
    icon: react,
    title: "React Js",
  },
  {
    id: "typescript",
    icon: ts,
    title: "TypeScript",
  },
  {
    id: "javascript",
    icon: js,
    title: "Javascript",
  },
  {
    id: "materialui",
    icon: mui,
    title: "Material UI",
  },
  {
    id: "tailwind",
    icon: tailwind,
    title: `TailwindCss`,
  },
  {
    id: "framerMotion",
    icon: framerMotion,
    title: "Framer Motion",
  },
  {
    id: "redux",
    icon: redux,
    title: "Redux",
  },
  {
    id: "reactNative",
    icon: reactNative,
    title: "React Native",
  },
  {
    id: "laravel",
    icon: laravel,
    title: "Laravel",
  },
  {
    id: "php",
    icon: php,
    title: "PHP",
  },
  {
    id: "mysql",
    icon: mysql,
    title: "MySQL",
  },
  {
    id: "html",
    icon: html,
    title: "HTML 5",
  },
  {
    id: "css",
    icon: css,
    title: "CSS 3",
  },
  {
    id: "bootstrap",
    icon: bootstrap,
    title: "Bootstrap",
  },
  {
    id: "python",
    icon: python,
    title: "Python",
  },
  {
    id: "github",
    icon: github,
    title: "Github",
  },
  {
    id: "figma",
    icon: figma,
    title: "Figma",
  },
  {
    id: "vscode",
    icon: vscode,
    title: "VS Code",
  },
  {
    id: "vercel",
    icon: vercel,
    title: "Vercel",
  },
  {
    id: "supabase",
    icon: supabase,
    title: "Supabase",
  },
  {
    id: "prisma",
    icon: prisma,
    title: "Prisma",
  },
  {
    id: "google",
    icon: google,
    title: "Google API",
  },
];

const unusedServices = ["Github", "Figma", "VS Code", "Vercel", "Google"];

export const filterServices = services.filter(
  (service) => !unusedServices.includes(service.title)
);

export const servicesSoon = [
  {
    icon: mongodb,
    title: "MongoDB",
  },
];
