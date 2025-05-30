// src/data/projects.js
import asfarImg from '../assets/images/asfartrip.png';
import blueImg from '../assets/images/blue.png';
import alhuriahImg from '../assets/images/alhuriah.png';
import waveImg from '../assets/images/wave.png';
import yallanet3lmImg from '../assets/images/yallanet3lm.png';
import landingPageImg from '../assets/images/landingPage.png';
import kotobiImg from '../assets/images/kotobi.png';
import todoImg from '../assets/images/todo.png';
import kasperImg from '../assets/images/kasper.png';
import template1Img from '../assets/images/template1.png';
import cvImg from '../assets/images/cv.png';

export const projectsData = [
    {
        id: 1,
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
        id: 2,
        title: "Wave",
        description: "ERP system with customizable applications and strong security measures for comprehensive business management and its website.",
        image: waveImg,
        technologies: ["React.js", "CSS", "React Router",  "API", "Axios", "Material UI"],
        category: "erp",
        challenges: "Designed and implemented a modular architecture to support customizable business applications.",
        liveLink: "https://wave.bluetechnology.online/",
        featured: true
    },
    {
        id: 3,
        title: "معا نتعلم",
        description: "Graduation project focused on creating an interactive learning platform.",
        image: yallanet3lmImg,
        technologies: ["React.js", "Bootstrap", "CSS", "React Router", "API", "Axios", "AOS Animation"],
        category: "web",
        challenges: "Implemented responsive design with engaging animations for better user experience.",
        liveLink: "https://graduation-project-doman.vercel.app/",
        featured: true
    },
    {
        id: 4,
        title: "Landing Page",
        description: "A simple landing page with a clean design and a call-to-action button.",
        image: landingPageImg,
        technologies: ["React.js", "Tailwind CSS"],
        category: "web",
        challenges: "Created a responsive landing page with a focus on user engagement and conversion.",
        liveLink: "https://landing-page-task-one.vercel.app/",
    },
    {
        id: 5,
        title: "Kotobi",
        description: "A book discovery and management application with modern UI.",
        image: kotobiImg,
        technologies: ["React.js", "CSS", "Material UI"],
        category: "web",
        challenges: "Created a responsive book browsing interface with Material UI components.",
        liveLink: "https://kotobi.vercel.app/",
    },
    {
        id: 6,
        title: "Todo App",
        description: "A task management application showcasing TypeScript integration.",
        image: todoImg,
        technologies: ["HTML", "CSS", "Tailwind CSS", "JavaScript", "TypeScript"],
        category: "web",
        challenges: "Implemented strong typing with TypeScript for a more robust application.",
        liveLink: "https://tasneemmhmd.github.io/todo-app/",
    },
    {
        id: 7,
        title: "Kasper",
        description: "A clean and modern HTML/CSS template.",
        image: kasperImg,
        technologies: ["HTML", "CSS"],
        category: "ui",
        challenges: "Created a pixel-perfect implementation of a design mockup.",
        liveLink: "https://tasneemmhmd.github.io/template/",
    },
    {
        id: 8,
        title: "Template",
        description: "A responsive template showcasing HTML/CSS skills.",
        image: template1Img,
        technologies: ["HTML", "CSS"],
        category: "ui",
        challenges: "Built a fully responsive layout without using any framework.",
        liveLink: "https://tasneemmhmd.github.io/template1/",
    },
    {
        id: 9,
        title: "CV",
        description: "A responsive template showcasing HTML/CSS skills.",
        image: cvImg,
        technologies: ["React.js", "CSS"],
        category: "ui",
        challenges: "Built a fully responsive layout without using any framework.",
        liveLink: "https://cv-tasneem.vercel.app/",
    }
];