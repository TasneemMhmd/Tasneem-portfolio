// src/data/projects.js
import blueImg from '../assets/images/blue.png';
import alhuriahImg from '../assets/images/alhuriah.png';
import waveImg from '../assets/images/wave.png';
import yallanet3lmImg from '../assets/images/yallanet3lm.png';
import kotobiImg from '../assets/images/kotobi.png';
import todoImg from '../assets/images/todo.png';
import kasperImg from '../assets/images/kasper.png';
import template1Img from '../assets/images/template1.png';
import cvImg from '../assets/images/cv.png';

export const projectsData = [
    {
        id: 1,
        title: "Blue ERP",
        description: "An ERP system built for efficient business management with an Arabic-friendly interface.",
        image: blueImg,
        technologies: ["React.js", "CSS", "API", "Axios"],
        category: "erp",
        challenges: "Implemented complex state management for multiple interconnected modules.",
        featured: true
    },
    {
        id: 2,
        title: "Alhuriah ERP",
        description: "A specialized ERP system for sweets factories management with comprehensive tools for production cycle tracking.",
        image: alhuriahImg,
        technologies: ["React.js", "CSS", "API", "Axios"],
        category: "erp",
        challenges: "Created custom visualizations for production workflows and inventory management.",
        featured: true
    },
    {
        id: 3,
        title: "Wave",
        description: "ERP system with customizable applications and strong security measures for comprehensive business management.",
        image: waveImg,
        technologies: ["React.js", "CSS", "API", "Axios"],
        category: "erp",
        challenges: "Designed and implemented a modular architecture to support customizable business applications.",
        liveLink: "https://wave.bluetechnology.online/",
        featured: true
    },
    {
        id: 4,
        title: "معا نتعلم",
        description: "Graduation project focused on creating an interactive learning platform.",
        image: yallanet3lmImg,
        technologies: ["React.js", "Bootstrap", "CSS", "API", "Axios", "AOS Animation"],
        category: "web",
        challenges: "Implemented responsive design with engaging animations for better user experience.",
        liveLink: "https://graduation-project-doman.vercel.app/",
        featured: true
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