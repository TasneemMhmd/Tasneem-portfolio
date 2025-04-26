import { FaBootstrap, FaChrome, FaCloud, FaCss3Alt, FaGit, FaGithub, FaGitlab, FaHtml5, FaJs, FaMobileAlt, FaNpm, FaReact, FaTachometerAlt } from "react-icons/fa";
import { SiAxios, SiFramer, SiMaterialdesign, SiNextdotjs, SiRedux, SiTailwindcss, SiTypescript, SiWebpack } from "react-icons/si";

const skillsData = [
  {
    id: "html5",
    name: "HTML5",
    icon: <FaHtml5 />,
    category: "frontend",
    color: "#E44D26"
  },
  {
    id: "css3",
    name: "CSS3",
    icon: <FaCss3Alt />,
    category: "frontend",
    color: "#264DE4"
  },
  {
    id: "javascript",
    name: "JavaScript",
    icon: <FaJs />,
    category: "frontend",
    color: "#F0DB4F"
  },
  {
    id: "typescript",
    name: "TypeScript",
    icon: <SiTypescript />,
    category: "frontend",
    color: "#007ACC"
  },
  {
    id: "react",
    name: "React.js",
    icon: <FaReact />,
    category: "framework",
    color: "#61DAFB"
  },
  {
    id: "redux",
    name: "Redux",
    icon: <SiRedux />,
    category: "framework",
    color: "#764ABC"
  },
  {
    id: "nextjs",
    name: "Next.js",
    icon: <SiNextdotjs />,
    category: "framework",
    color: "#000000"
  },
  {
    id: "framer",
    name: "Framer Motion",
    icon: <SiFramer />,
    category: "framework",
    color: "#0055FF"
  },
  {
    id: "bootstrap",
    name: "Bootstrap",
    icon: <FaBootstrap />,
    category: "framework",
    color: "#7952B3"
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    icon: <SiTailwindcss />,
    category: "framework",
    color: "#38B2AC"
  },
  {
    id: "mui",
    name: "Material UI",
    icon: <SiMaterialdesign />,
    category: "framework",
    color: "#0081CB"
  },
  {
    id: "git",
    name: "Git",
    icon: <FaGit />,
    category: "tools",
    color: "#F05032"
  },
  {
    id: "github",
    name: "GitHub",
    icon: <FaGithub />,
    category: "tools",
    color: "#181717"
  },
  {
    id: "gitlab",
    name: "GitLab",
    icon: <FaGitlab />,
    category: "tools",
    color: "#FC6D26"
  },
  {
    id: "devtools",
    name: "DevTools",
    icon: <FaChrome />,
    category: "tools",
    color: "#4285F4"
  },
  {
    id: "webpack",
    name: "Webpack",
    icon: <SiWebpack />,
    category: "tools",
    color: "#8DD6F9"
  },
  {
    id: "npm",
    name: "NPM",
    icon: <FaNpm />,
    category: "tools",
    color: "#CB3837"
  },
  {
    id: "rest",
    name: "REST APIs",
    icon: <FaCloud />,
    category: "other",
    color: "#5FB6F5"
  },
  {
    id: "axios",
    name: "Axios",
    icon: <SiAxios />,
    category: "other",
    color: "#5A29E4"
  },
  {
    id: "performance",
    name: "Performance",
    icon: <FaTachometerAlt />,
    category: "other",
    color: "#FF6B6B"
  },
  {
    id: "responsive",
    name: "Responsive",
    icon: <FaMobileAlt />,
    category: "other",
    color: "#4ECDC4"
  }
];

export { skillsData };
