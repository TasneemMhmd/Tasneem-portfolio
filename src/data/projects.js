// src/data/projects.js
import asfarImg from '../assets/images/asfartrip.png';
import explorer from '../assets/images/explorer.png';
import portfolio from '../assets/images/portfolio.png';
import waveImg from '../assets/images/wave.png';
import yallanet3lmImg from '../assets/images/yallanet3lm.png';
import landingPageImg from '../assets/images/landingPage.png';
import kotobiImg from '../assets/images/kotobi.png';
import todoImg from '../assets/images/todo.png';
import kasperImg from '../assets/images/kasper.png';
import template1Img from '../assets/images/template1.png';
import cvImg from '../assets/images/cv.png';
import miniAuth from '../assets/images/auth.png';
import currencyConverter from '../assets/images/converter.png';
import habitsTracker from '../assets/images/tracker.png';
import productsViewer from '../assets/images/viewer.png';

export const projectsData = [
    {
        id: 1,
        title: "Ibrahim Al-Khaldy portfolio",
        description: "A personal portfolio website showcasing my skills and projects, built with React.js and Tailwind CSS.",
        image: portfolio,
        technologies: ["React.js", "Tailwind CSS", "emailjs"],
        category: "web",
        challenges: "Implemented a contact form with email notifications using EmailJS, ensuring smooth communication.",
        liveLink: "https://freelance-portfolio-indol.vercel.app/",
    },
    {
        id: 2,
        title: "Asfartrip",
        description: "A beauty center booking system with a clean and user-friendly interface, allowing users to book appointments, explore services, and contact the center easily.",
        image: asfarImg,
        technologies: ["React.js", "CSS", "React Router", "API", "Axios"],
        category: "web",
        challenges: "Built a multi-page booking application with smooth navigation and form handling, ensuring a seamless user experience.",
        liveLink: "https://booking-rosy-psi.vercel.app/home",
        featured: true
    },
    {
        id: 3,
        title: "Wave",
        description: "ERP system with customizable applications and strong security measures for comprehensive business management and its website.",
        image: waveImg,
        technologies: ["React.js", "CSS", "React Router", "API", "Axios", "Material UI"],
        category: "erp",
        challenges: "Designed and implemented a modular architecture to support customizable business applications.",
        liveLink: "https://wave.bluetechnology.online/",
        featured: true
    },
    {
        id: 4,
        title: "يلا نتعلم",
        description: "Graduation project focused on creating an interactive learning platform.",
        image: yallanet3lmImg,
        technologies: ["React.js", "Bootstrap", "CSS", "React Router", "API", "Axios", "AOS Animation"],
        category: "web",
        challenges: "Implemented responsive design with engaging animations for better user experience.",
        liveLink: "https://graduation-project-doman.vercel.app/",
        featured: true
    },
    {
        id: 5,
        title:"TV-Show Explorer",
        description: "A TV show exploration application that allows users to search and discover their favorite shows.",
        image: explorer,
        technologies: ["React.js", "CSS", "API", "Axios", "React Router"],
        category: "web",
        challenges: "Integrated with a third-party API to fetch and display TV show data dynamically.",
        liveLink: "https://tv-show-explorer-nine.vercel.app/",
        featured: true
    },
    {
        id: 6,
        title: "Habit Tracker",
        description: "A simple habit tracking application built with JS.",
        image: habitsTracker,
        technologies: ["HTML", "CSS", "JavaScript"],
        category: "mini",
        learningFocus: "JavaScript DOM manipulation, local storage for data persistence",
        liveLink: "https://tasneemmhmd.github.io/habit-tracker-app/",
    },
    {
        id: 7,
        title: "Kotobi",
        description: "A book discovery and management application with modern UI.",
        image: kotobiImg,
        technologies: ["React.js", "CSS", "Material UI"],
        category: "web",
        challenges: "Created a responsive book browsing interface with Material UI components.",
        liveLink: "https://kotobi.vercel.app/",
    },
    {
        id: 8,
        title: "Todo App",
        description: "A task management application showcasing TypeScript integration.",
        image: todoImg,
        technologies: ["HTML", "CSS", "Tailwind CSS", "JavaScript", "TypeScript"],
        category: "web",
        challenges: "Implemented strong typing with TypeScript for a more robust application.",
        liveLink: "https://tasneemmhmd.github.io/todo-app/",
    },
    {
        id: 9,
        title: "Landing Page",
        description: "A simple landing page with a clean design and a call-to-action button.",
        image: landingPageImg,
        technologies: ["React.js", "Tailwind CSS"],
        category: "ui",
        challenges: "Created a responsive landing page with a focus on user engagement and conversion.",
        liveLink: "https://landing-page-task-one.vercel.app/",
    },
    {
        id: 10,
        title: "Mini Authentication System",
        description: "A basic authentication system using JavaScript and local storage.",
        image: miniAuth,
        technologies: ["HTML", "CSS", "JavaScript"],
        category: "mini",
        learningFocus: "User authentication, form validation, local storage",
        liveLink: "https://tasneemmhmd.github.io/register-login-system/",
    },
    {
        id: 11,
        title: "Product Viewer",
        description: "A product viewer application showcasing product details and ratings.",
        image: productsViewer,
        technologies: ["HTML", "CSS", "JavaScript"],
        category: "mini",
        learningFocus: "JavaScript event handling, DOM manipulation, responsive design",
        liveLink: "https://tasneemmhmd.github.io/product-viewer/",
    },
    {
        id: 12,
        title: "Mini Currency Converter",
        description: "A simple currency converter application using JavaScript.",
        image: currencyConverter,
        technologies: ["HTML", "CSS", "JavaScript"],
        category: "mini",
        learningFocus: "JavaScript DOM manipulation",
        liveLink: "https://tasneemmhmd.github.io/currency-converter/",
    },
    {
        id: 13,
        title: "Interactive CV",
        description: "A React-based CV template showcasing component-based architecture.",
        image: cvImg,
        technologies: ["React.js", "CSS", "Component Architecture"],
        category: "mini",
        learningFocus: "React components, props, state management basics",
        liveLink: "https://cv-tasneem.vercel.app/",
    },
    {
        id: 14,
        title: "Responsive Template",
        description: "A fully responsive template built from scratch to practice layout techniques.",
        image: template1Img,
        technologies: ["HTML", "CSS", "Media Queries"],
        category: "mini",
        learningFocus: "Responsive design, CSS animations, cross-browser compatibility",
        liveLink: "https://tasneemmhmd.github.io/template1/",
    },
    {
        id: 15,
        title: "Kasper Template",
        description: "A clean and modern HTML/CSS template demonstrating advanced CSS techniques.",
        image: kasperImg,
        technologies: ["HTML", "CSS", "Flexbox", "Grid"],
        category: "mini",
        learningFocus: "CSS Grid, Flexbox, responsive design principles",
        liveLink: "https://tasneemmhmd.github.io/template/",
    }
];
