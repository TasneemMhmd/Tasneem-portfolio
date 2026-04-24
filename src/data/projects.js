import asfarImg from '../assets/images/asfartrip.png';
import explorer from '../assets/images/explorer.png';
import portfolio from '../assets/images/portfolio.png';
import waveImg from '../assets/images/wave.png';
import yallanet3lmImg from '../assets/images/yallanet3lm.png';
import landingPageImg from '../assets/images/landingPage.png';
import landingPage2 from '../assets/images/landingPage2.png';
import kotobiImg from '../assets/images/kotobi.png';
import todoImg from '../assets/images/todo.png';
import kasperImg from '../assets/images/kasper.png';
import template1Img from '../assets/images/template1.png';
import cvImg from '../assets/images/cv.png';
import miniAuth from '../assets/images/auth.png';
import currencyConverter from '../assets/images/converter.png';
import habitsTracker from '../assets/images/tracker.png';
import productsViewer from '../assets/images/viewer.png';
import feblox from '../assets/images/feblox.png';
import apm from '../assets/images/apm.png';
import youverse from '../assets/images/youverse.png';

export const projectsData = [
    // REAL WORK 
    {
        id: 1,
        title: "Youverse Learning Platform",
        description: "A full-featured learning platform with authentication, video modules, and certificate system.",
        image: youverse,
        technologies: ["React.js", "Axios", "REST APIs", "React Router"],
        category: "web",
        challenges: "Implemented full authentication flow, JWT handling, and video tracking system.",
        liveLink: "https://www.youversehub.com/",
        featured: true
    },
    {
        id: 2,
        title: "APM Platform",
        description: "Platform with user-facing website and admin dashboard features.",
        image: apm,
        technologies: ["React.js", "Axios", "REST APIs"],
        category: "web",
        challenges: "Built scalable UI and contributed to dashboard interfaces.",
        liveLink: "https://world-apm.com/",
        featured: true
    },
        {
        id: 3,
        title: "E-commerce Web App",
        description: "An e-commerce application built as a technical task, featuring product listing, routing, and API integration.",
        image: landingPage2,
        technologies: ["React.js", "React Router", "Axios", "API"],
        category: "web",
        challenges: "Handled dynamic routing, API data fetching, and structured product display.",
        liveLink: "https://ecommerce-alpha-ten-89.vercel.app/"
    },
    {
        id: 4,
        title: "Feblox",
        description: "Company website with reusable UI components.",
        image: feblox,
        technologies: ["React.js"],
        category: "web",
        challenges: "Created reusable components for scalable architecture.",
        liveLink: "https://www.feblox.co.uk/",
    },

    // FREELANCE / CLIENT WORK
    {
        id: 5,
        title: "Client Portfolio Website",
        description: "A portfolio website developed for a client using React.js and Tailwind CSS.",
        image: portfolio,
        technologies: ["React.js", "Tailwind CSS", "EmailJS"],
        category: "web",
        challenges: "Built contact form with EmailJS and responsive UI based on client needs.",
        liveLink: "https://freelance-portfolio-indol.vercel.app/"
    },

    // STRONG PROJECTS
    {
        id: 6,
        title: "Wave",
        description: "ERP system with customizable applications.",
        image: waveImg,
        technologies: ["React.js", "CSS", "React Router", "API", "Axios", "Material UI"],
        category: "erp",
        challenges: "Designed modular architecture for business applications.",
        liveLink: "https://wave.bluetechnology.online/",
        featured: true
    },
    {
        id: 7,
        title: "Asfartrip",
        description: "Beauty center booking system with clean UI.",
        image: asfarImg,
        technologies: ["React.js", "CSS", "React Router", "API", "Axios"],
        category: "web",
        challenges: "Handled booking system and smooth navigation.",
        liveLink: "https://booking-rosy-psi.vercel.app/home",
        featured: true
    },
    {
        id: 8,
        title: "TV-Show Explorer",
        description: "Search and discover TV shows.",
        image: explorer,
        technologies: ["React.js", "CSS", "API", "Axios"],
        category: "web",
        challenges: "Integrated third-party APIs.",
        liveLink: "https://tv-show-explorer-nine.vercel.app/",
        featured: true
    },
    {
        id: 9,
        title: "يلا نتعلم",
        description: "Interactive learning platform.",
        image: yallanet3lmImg,
        technologies: ["React.js", "Bootstrap", "CSS"],
        category: "web",
        challenges: "Responsive UI with animations.",
        liveLink: "https://graduation-project-doman.vercel.app/"
    },
    {
        id: 10,
        title: "Kotobi",
        description: "Book discovery app.",
        image: kotobiImg,
        technologies: ["React.js", "Material UI"],
        category: "web",
        liveLink: "https://kotobi.vercel.app/"
    },

    // MINI PROJECTS 
    {
        id: 11,
        title: "Habit Tracker",
        description: "Track daily habits.",
        image: habitsTracker,
        technologies: ["HTML", "CSS", "JavaScript"],
        category: "mini",
        liveLink: "https://tasneemmhmd.github.io/habit-tracker-app/",
    },
    {
        id: 12,
        title: "Todo App",
        description: "Task management app with TypeScript.",
        image: todoImg,
        technologies: ["HTML", "CSS", "TypeScript"],
        category: "mini",
        liveLink: "https://tasneemmhmd.github.io/todo-app/",
    },
    {
        id: 13,
        title: "Mini Authentication System",
        description: "Basic auth system.",
        image: miniAuth,
        technologies: ["JavaScript"],
        category: "mini",
        liveLink: "https://tasneemmhmd.github.io/register-login-system/",
    },
    {
        id: 14,
        title: "Product Viewer",
        description: "Product viewer UI.",
        image: productsViewer,
        technologies: ["JavaScript"],
        category: "mini",
        liveLink: "https://tasneemmhmd.github.io/product-viewer/",
    },
    {
        id: 15,
        title: "Currency Converter",
        description: "Convert currencies.",
        image: currencyConverter,
        technologies: ["JavaScript"],
        category: "mini",
        liveLink: "https://tasneemmhmd.github.io/currency-converter/",
    },
    {
        id: 16,
        title: "Interactive CV",
        description: "React CV template.",
        image: cvImg,
        technologies: ["React.js"],
        category: "mini",
        liveLink: "https://cv-tasneem.vercel.app/",
    },
    {
        id: 17,
        title: "Landing Page",
        description: "Responsive landing page.",
        image: landingPageImg,
        technologies: ["React.js"],
        category: "ui",
        liveLink: "https://landing-page-task-one.vercel.app/",
    },
    {
        id: 18,
        title: "Responsive Template",
        description: "Practice layout.",
        image: template1Img,
        technologies: ["HTML", "CSS"],
        category: "mini",
        liveLink: "https://tasneemmhmd.github.io/template1/",
    },
    {
        id: 19,
        title: "Kasper Template",
        description: "Modern template.",
        image: kasperImg,
        technologies: ["HTML", "CSS"],
        category: "mini",
        liveLink: "https://tasneemmhmd.github.io/template/",
    }
];