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
import appartAli from "@/public/images/projects/appart-ali.png";
import zenHotel from "@/public/images/projects/zen-hotel.png";
import invoicr from "@/public/images/projects/invoicr.png";
import tabibiGallery from "./projectsGallery/tabibiGallery";
import stockGallery from "./projectsGallery/stockGallery";
import petTracker from "@/public/images/projects/pet-tracker.png";
import petTrackerGallery from "./projectsGallery/petTrackerGallery";
import avsm from "@/public/images/projects/avsm.png";
import odoc from "@/public/images/projects/odoc.png";
////
import { services } from "./servicesList";

const tech = (id: string) => {
  return services.find((service) => service.id === id);
};

const projects = [
  {
    image: avsm,
    title: "AVSM Volleyball Club 🏐",
    body: "Full-stack website for a volleyball club with an admin CMS. Built with Next.js, TypeScript, and Tailwind CSS. Includes match management, news/blog, team rosters, photo galleries, and responsive design.",
    chips: [
      tech("nextjs"),
      tech("react"),
      tech("tailwind"),
      tech("typescript"),
      tech("framerMotion"),
    ],
    preview: "https://avsm.jellyouness.com/",
    github: null,
    year: 2025,
    inProgress: true,
  },
  {
    image: invoicr,
    title: "Invoicr SaaS - Invoice Generator & Management System",
    body: "A platform for generating and managing invoices, allowing users to search, filter, and view invoices.",
    chips: [
      tech("nextjs"),
      tech("react"),
      tech("tailwind"),
      tech("typescript"),
      tech("supabase"),
    ],
    preview: "https://invoicrapp.com",
    github: null,
    year: 2025,
    inProgress: true,
  },
  {
    image: null,
    title: "oDoc - Medical Practice Management Platform 🏥"
    body: "A full-stack healthcare management system featuring appointment scheduling, patient records, WhatsApp chatbot integration, prescription management, and accounting modules. With role-based access control and real-time data synchronization."
    chips: [
      tech("react"),
      tech("tailwind"),
      tech("typescript"),
      tech("supabase"),
    ],
    preview: "https://odoc.ma",
    github: null,
    year: 2025,
    inProgress: true,
  },
  {
    image: wifina,
    title: "Wifina - Loan Calculator & Pre-Approval Platform",
    body: "fully digital platform that enables quick calculations of loan installments and interest, providing instant pre-approval responses through strategic banking partnerships.",
    chips: [
      tech("nextjs"),
      tech("react"),
      tech("laravel"),
      tech("typescript"),
      tech("materialui"),
    ],
    preview: "https://wifina.be",
    github: null,
    year: "2024-2025",
    inProgress: false,
  },
  {
    image: appartAli,
    title: "Appart Ali - Real Estate Platform with AI Assistant",
    body: "A platform for managing real estate listings, allowing users to search, filter, and view properties using Guesty API. and also have an AI assistant to help users with their queries.",
    chips: [
      tech("nextjs"),
      tech("react"),
      tech("tailwind"),
      tech("typescript"),
      tech("prisma"),
    ],
    preview: "https://appartali.com/",
    github: null,
    year: 2025,
    inProgress: false,
  },
  {
    image: zenHotel,
    title: "Zen Hotel - Hotel Booking & Presentation",
    body: "A hotel booking and presentation website for Zen Hotel, featuring rooms, services, and a reservation system.",
    chips: [
      tech("nextjs"),
      tech("react"),
      tech("tailwind"),
      tech("typescript"),
      tech("prisma"),
    ],
    preview: "https://zen-hotel.vercel.app/",
    github: null,
    year: 2025,
    inProgress: false,
  },
  {
    image: ibc,
    title: "IBC - Skills Anticipation Tool",
    body: "An innovative tool for employment and training stakeholders to understand, anticipate and support skills needs in the Centre-Val de Loire region of France 🇫🇷.",
    chips: [
      tech("nextjs"),
      tech("react"),
      tech("typescript"),
      tech("materialui"),
    ],
    preview: "https://app.ibc.preprod.cysc.fr/",
    github: null,
    year: "2024-2025",
    notPublic: true,
  },
  {
    image: petTracker,
    title: "PetTracker Pro - Pet Management & GPS Tracking App",
    body: "A mobile app that helps pet owners track and manage their animals. real-time GPS tracking with interactive maps, NFC tag management, and supports lost pet alerts and ownership transfers.",
    chips: [tech("reactNative"), tech("typescript"), tech("supabase")],
    images: petTrackerGallery,
    preview: null,
    github: null,
    year: 2025,
    inProgress: false,
    isMobile: true,
  },
  {
    image: travelFlow,
    title: "Travel Flow - TSP Solver",
    body: "Smart and fast management of routes & The Traveling Salesman Problem (TSP).",
    chips: [
      tech("nextjs"),
      tech("react"),
      tech("materialui"),
      tech("typescript"),
      tech("python"),
      tech("google"),
    ],
    preview: "https://travel-flow-tsp.vercel.app/",
    github: "https://github.com/JellYouness/travel-flow-tsp",
    year: 2024,
    inProgress: false,
  },
  {
    image: educonnect,
    title: "EduConnect - Landing Page",
    body: "A landing page for a School Management System web app which is Software As a Service(SaaS). showing the features and the pricing plans.",
    chips: [
      tech("nextjs"),
      tech("react"),
      tech("tailwind"),
      tech("typescript"),
      tech("framerMotion"),
    ],
    preview: "https://educonnect.jellyouness.com/",
    //github: "https://github.com/JellYouness/educonnect",
    year: 2024,
    inProgress: false,
  },
  {
    image: creon,
    title: "Creon AI - NFT Platform Landing Page",
    body: "A landing page for a NFT Blockchain Platform. clone of the website[creon.ai].",
    chips: [
      tech("nextjs"),
      tech("react"),
      tech("tailwind"),
      tech("typescript"),
    ],
    preview: "https://creon.jellyouness.com/",
    github: "https://github.com/JellYouness/creon-nft-landing-page",
    year: 2024,
    inProgress: false,
  },
  {
    image: tabibi,
    title: "Tabibi - Medical Emergency Management 🏥",
    body: "Modern medical Web application for Emergency Management (TABIBI), presented as a final university studies project.",
    chips: [
      tech("react"),
      tech("materialui"),
      tech("redux"),
      tech("javascript"),
      tech("laravel"),
      tech("mysql"),
    ],
    images: tabibiGallery,
    github: "https://github.com/JellYouness/Tabibi",
    preview: null,
    year: 2023,
    inProgress: false,
  },
  {
    image: portfolio2,
    title: "Personal Portfolio v2",
    body: "In this version, I spotlight my adeptness in new technologies, enhancing performance, ensuring dynamic and efficient web interactions.",
    chips: [
      tech("nextjs"),
      tech("react"),
      tech("tailwind"),
      tech("typescript"),
      tech("framerMotion"),
    ],
    preview: "https://jellyouness.com",
    //github: "https://github.com/JellYouness/portfolio-v2",
    year: "2024-2025",
    inProgress: false,
  },
  {
    image: portfolio1,
    title: "Personal Portfolio v1 (Old)",
    body: "In my portfolio, I've demonstrated expertise in ReactJs, Material UI, and solving complex challenges. I've optimized performance, ensuring efficient web experiences.",
    chips: [
      tech("react"),
      tech("materialui"),
      tech("javascript"),
      tech("framerMotion"),
    ],
    preview: "https://v1.jellyouness.com",
    github: "https://github.com/JellYouness/portfolio",
    year: 2023,
    inProgress: false,
  },
  {
    image: stockmanager,
    title: "OPTIM'STOCK - Stock Manager",
    body: "Company stock management web application.",
    chips: [
      tech("html"),
      tech("css"),
      tech("bootstrap"),
      tech("javascript"),
      tech("php"),
      tech("mysql"),
    ],
    images: stockGallery,
    github: "https://github.com/JellYouness/Stock-Management",
    preview: null,
    year: 2022,
    inProgress: false,
  },
  {
    image: digitalmind,
    title: "Digital Mind Agency - Static Website",
    body: 'A Static Website for an agency named "Digital Mind", showing their services and projects also the team members.',
    chips: [tech("html"), tech("css"), tech("bootstrap"), tech("javascript")],
    preview: "https://jellyouness.github.io/Digital-Mind-Agency/",
    //github: "https://github.com/JellYouness/Digital-Mind-Agency",
    year: 2022,
    inProgress: false,
  },
  {
    image: sms,
    title: "SMS - School Management System",
    body: "A School Management System for managing students, teachers, and classes. It's a work in progress.",
    chips: [
      tech("react"),
      tech("materialui"),
      tech("redux"),
      tech("javascript"),
    ],
    preview: "https://ihei.vercel.app",
    // github: "https://github.com/JellYouness/Club-Manager",
    year: 2024,
    inProgress: false,
  },
  {
    image: pcc,
    title: "PCC Membership management",
    body: "Gestion des membres et les abonnements de l'entreprise Palmeraie Country Club.",
    chips: [
      tech("html"),
      tech("css"),
      tech("bootstrap"),
      tech("javascript"),
      tech("php"),
      tech("mysql"),
    ],
    github: "https://github.com/JellYouness/Gestion-des-membres",
    preview: null,
    year: 2021,
    inProgress: false,
  },
];

export default projects;
