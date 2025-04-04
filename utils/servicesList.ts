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

export const services = [
  {
    icon: nextjs,
    title: "Next Js",
  },
  {
    icon: react,
    title: "React Js",
  },
  {
    icon: ts,
    title: "TypeScript",
  },
  {
    icon: js,
    title: "Javascript",
  },
  {
    icon: mui,
    title: "Material UI",
  },
  {
    icon: tailwind,
    title: `TailwindCss`,
  },
  {
    icon: framerMotion,
    title: "Framer Motion",
  },
  {
    icon: redux,
    title: "Redux",
  },
  {
    icon: laravel,
    title: "Laravel",
  },
  {
    icon: php,
    title: "PHP",
  },
  {
    icon: mysql,
    title: "MySQL",
  },
  {
    icon: html,
    title: "HTML 5",
  },
  {
    icon: css,
    title: "CSS 3",
  },
  {
    icon: bootstrap,
    title: "Bootstrap",
  },
  {
    icon: python,
    title: "Python",
  },
  {
    icon: github,
    title: "Github",
  },
  {
    icon: figma,
    title: "Figma",
  },
  {
    icon: vscode,
    title: "VS Code",
  },
  {
    icon: vercel,
    title: "Vercel",
  },
];

const unusedServices = ["Github", "Figma", "VS Code", "Vercel"];

export const filterServices = services.filter(
  (service) => !unusedServices.includes(service.title)
);

export const servicesSoon = [
  {
    icon: mongodb,
    title: "MongoDB",
  },
  {
    icon: supabase,
    title: "Supabase",
  },
  {
    icon: prisma,
    title: "Prisma",
  },
];
