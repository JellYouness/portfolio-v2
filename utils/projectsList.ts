// prettier-ignore
import pcc from "@/public/images/projects/pcc.png";
import tabibi from '@/public/images/projects/tabibi.png';
import istech from '@/public/images/projects/istech.png';
import digitalmind from '@/public/images/projects/digitalmind.png';
import stockmanager from '@/public/images/projects/stockmanager.png';
////
import bootstrap from '@/public/images/bootstrap.svg';
import css from '@/public/images/css.svg';
import figma from '@/public/images/figma.svg';
import github from '@/public/images/github.svg';
import html from '@/public/images/html.svg';
import js from '@/public/images/js.svg';
import laravel from '@/public/images/laravel.svg';
import mysql from '@/public/images/mysql.svg';
import php from '@/public/images/php.svg';
import tailwind from '@/public/images/tailwind.svg';
import vscode from '@/public/images/vscode.svg';
import react from '@/public/images/react.svg';
import mui from '@/public/images/mui.svg';
import nextjs from '@/public/images/nextjs-icon.svg';
import mongodb from '@/public/images/mongodb.svg';
import prisma from '@/public/images/prisma.svg';
import supabase from '@/public/images/supabase.png';
import tabibiGallery from './projectsGallery/tabibiGallery';
import stockGallery from './projectsGallery/stockGallery';

const projects = [
    {
        image: tabibi,
        title: 'Tabibi - Gestion des Urgences',
        body: "Conception et Développement d'une application Web médicale moderne pour la Gestion des Urgences (TABIBI), presenté comme projet de fin des études universitaires.",
        chips: [
            {
                img: react
            },
            {
                img: mui
            },
            {
                img: laravel
            },
            {
                img: mysql
            }
        ],
        images: tabibiGallery,
        github: 'https://github.com/JellYouness/Tabibi'
    },
    {
        image: digitalmind,
        title: 'Digital Mind Agency',
        body: ' A Static Website for an agency named "Digital Mind", showing their services and projects also the team members. Made with Html, Css and JavaScript.',
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
            }
        ],
        preview: 'https://jellyouness.github.io/Digital-Mind-Agency/',
        github: 'https://github.com/JellYouness/Digital-Mind-Agency'
    },
    {
        image: stockmanager,
        title: "OPTIM'STOCK - Stock Manager",
        body: "Conception et develepoment d'une application web de gestion de stock d'une entreprise.",
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
        images: stockGallery,
        github: 'https://github.com/JellYouness/Stock-Management'
    },
    {
        image: istech,
        title: 'IS-TECH - Club Manager',
        body: "Conception et Développement d'une application Web moderne pour la Gestion des Clubs (Membres, Abonnements, Acces...).",
        chips: [
            {
                img: react
            },
            {
                img: mui
            },
            {
                img: laravel
            },
            {
                img: mysql
            }
        ],
        images: [],
        github: 'https://github.com/JellYouness/Club-Manager'
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
