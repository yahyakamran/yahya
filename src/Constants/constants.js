import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faX,
  faBars,
  faWindowRestore,
  faBagShopping,
  faDiceD6,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import {
  faReact,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import {
  express,
  mongoDB,
  htmlIcon,
  cssIcon,
  jsIcon,
  reactIcon,
  gitIcon,
  githubIcon,
  eslintIcon,
  viteIcon,
  nodeIcon,
  pawsitivePrototype,
  calculator,
  memoryGame,
  homework,
  calender,
  avatar,
  scssIcon,
  dom,
  ecom,
} from "../assets";

library.add(faX, faBars, faWindowRestore, faBagShopping, faDiceD6);

const media = {
  mongoDB,
  express,
  htmlIcon,
  cssIcon,
  jsIcon,
  reactIcon,
  gitIcon,
  githubIcon,
  eslintIcon,
  viteIcon,
  nodeIcon,
  avatar,
  scssIcon,
};

const icons = {
  faBars,
  faX,
  faWindowRestore,
  faBagShopping,
  faDiceD6,
  faReact,
  faGithub,
  faLinkedin,
  faEnvelope,
};

const introduction = {
  text: [
    "Hello there, I'm so happy you are here! (:",

    "My name is Yahya, I'm 17 and a student of Intermediate in Computer Science at Punjab College Juaharabad. I have a strong passion for self new learning technologies in Computer Science.",

    "I love to write code, and I don't get exhausted doing this. I am very passionate about learning new things. I strongly believe in fundamentals. If your fundamentals are great, you can not only write great code but also learn new things quickly.",

    "I'm continuously thrilled to partner with individuals and teams who wholeheartedly embrace my fervor for crafting extraordinary experiences. Your visit to my portfolio is deeply appreciated !",
  ],
};

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const projects = [
  {
    name: "DemoFurniture",
    description:
      "An e-commerce website built with React, SCSS, and Vite combines the power of a dynamic front-end library (React) with efficient styling (SCSS) and a fast build tool (Vite). Leveraging React's component-based architecture, the website delivers a seamless user experience, while SCSS provides a maintainable and modular styling approach.",
    image: ecom,
    source_code_link: "https://github.com/yahyakamran/ecom",
    demo_link: "https://yahyakamran.github.io/ecom/",
  },
  {
    name: "HomeWork",
    description:
      "The HomeWork is a web-based platform designed to streamline the submission of programming assignments for college students. This project provides a user-friendly interface for students to upload their coding tasks.",
    image: homework,
    source_code_link: "https://github.com/yahyakamran/HomeWork",
    demo_link: "https://yahyakamran.github.io/HomeWork/",
  },
  {
    name: "CAL",
    description:
      "A simple calender for linux written in C.The goal of this project to start a exploration in perfermance oriented and system level development",
    image: calender,
    source_code_link: "https://github.com/yahyakamran/cal",
    demo_link: "https://github.com/yahyakamran/cal",
  },
  {
    name: "DOM Manuplator",
    description:
      "Welcome to the DOM Manipulator website, an interactive platform showcasing the real-time magic of HTML Document Object Model (DOM) manipulation.This demonstrate how HTML Document Object Model (DOM)is manuplated based on user interaction",
    image: dom,
    source_code_link: "https://github.com/yahyakamran/DOM",
    demo_link: "https://dommanipulate.netlify.app/",
  },
];

const memoji = {
  image: [avatar],
};

const skills = [
  {
    id: "html",
    title: "HTML",
    icon: htmlIcon,
    description:
      "I have a strong command of HTML for organizing web pages and generating meaningful content that can be accessed by all users.",
  },
  {
    id: "mongoDB",
    title: "mongoDB",
    icon: mongoDB,
    description:
      "I am an experienced MongoDB developer with a proven track record of designing and implementing scalable applications. With a deep understanding of MongoDB's flexible document-based architecture, I consistently craft high-performance solutions that efficiently handle growing data demands.",
  },
  {
    id: "css",
    title: "CSS",
    icon: cssIcon,
    description:
      "I possess expertise in utilizing CSS to design web pages and craft visually captivating layouts that enhance the overall user experience.",
  },
  {
    id: "javascript",
    title: "JavaScript",
    icon: jsIcon,
    description:
      "I have substantial experience in employing JavaScript to introduce interactivity and functionality into web pages, resulting in dynamic user interfaces.",
  },
  {
    id: "react",
    title: "React",
    icon: reactIcon,
    description:
      "I am well-versed in React, proficient in creating reusable components and managing application state using hooks and context.",
  },
  {
    id: "git",
    title: "Git",
    icon: gitIcon,
    description:
      "I am proficient in Git, managing code changes, collaborating with others, and resolving conflicts effectively.",
  },
  {
    id: "github",
    title: "GitHub",
    icon: githubIcon,
    description:
      "I am skilled in using GitHub for seamless project collaboration, code sharing, and issue tracking. Through GitHub, I efficiently create and manage repositories and effectively present my work to potential employers.",
  },
  {
    id: "vite",
    title: "Vite",
    icon: viteIcon,
    description:
      "I have gained considerable experience working with Vite for approximately six months, leveraging its capabilities to build React websites and seamlessly deploy them on platforms like Netlify.",
  },
  {
    id: "node",
    title: "Node",
    icon: nodeIcon,
    description:
      "When it comes to building web applications, I prefer using Node as my runtime environment over Yarn. I have expertise in leveraging Node.js to develop powerful and scalable web applications.",
  },
  {
    id: "eslint",
    title: "Eslint",
    icon: eslintIcon,
    description:
      "I utilize ESLint to identify and resolve code issues, as well as standardize the structure of my projects. With ESLint, I ensure code quality and consistency throughout my development process.",
  },
  {
    id: "scss",
    title: "SCSS",
    icon: scssIcon,
    description:
      "Experienced developer proficient in SCSS, transforming designs into elegant and responsive web interfaces. Adept at leveraging SCSS's power for modular styling, enhancing collaboration across teams to deliver visually impressive and user-centric websites.",
  },
  {
    id: "express",
    title: "Express",
    icon: express,
    description:
      "Dedicated Express developer with a proven track record of creating and optimizing robust backends. Proficient in handling and enhancing backend systems, I bring efficiency to web applications through my expertise in Express. Passionate about building seamless and high-performing server-side solutions.",
  },
];

const markerSvg = `<svg viewBox="-4 0 36 36">
    <path fill="currentColor" d="M14,0 C21.732,0 28,5.641 28,12.6 C28,23.963 14,36 14,36 C14,36 0,24.064 0,12.6 C0,5.641 6.268,0 14,0 Z"></path>
    <circle fill="black" cx="14" cy="14" r="7"></circle>
  </svg>`;

export { media, introduction, projects, memoji, skills, markerSvg, icons };
