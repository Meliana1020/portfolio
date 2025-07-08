// src/constants/projectData.js
import {
  SiNextdotjs,
  SiCss3,
  SiShadcnui,
  SiTypescript,
  SiDaisyui,
} from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { RiReactjsFill } from "react-icons/ri";
import { BiLogoTailwindCss } from "react-icons/bi";
import { FaHtml5 } from "react-icons/fa";

export const projectData = [
  {
    title: "Trans Sabawana",
    description: "Landing Page for Trans Sabawana",
    image: "/thumbnail trans sabawana.png",
    alt: "transsabawana",
    link: "https://trans-sabawana.vercel.app/",
    tech: [SiTypescript, SiNextdotjs, BiLogoTailwindCss, SiShadcnui],
  },
  {
    title: "Education Course",
    description: "Mission Fullstack Development in Bootcamp Harisenin.com",
    image: "/thumbnail edu.svg",
    alt: "edu",
    link: "https://mission2fe-education-course.vercel.app/",
    tech: [IoLogoJavascript, RiReactjsFill, BiLogoTailwindCss],
  },
  {
    title: "Portfolio",
    description: "Mission Fullstack Development in Bootcamp Harisenin.com",
    image: "/thumbnail porto.png",
    alt: "portfolio",
    link: "#porto",
    tech: [IoLogoJavascript, RiReactjsFill, BiLogoTailwindCss,, SiDaisyui],
  },
  {
    title: "To Do List",
    description: "Mission Fullstack Development in Bootcamp Harisenin.com",
    image: "/thumbnail todolist.png",
    alt: "todolist",
    link: "https://todolist-psi-ecru.vercel.app/",
    tech: [FaHtml5, SiCss3, IoLogoJavascript],
  },
  {
    title: "Use Case Study - Amartha Gold Investment",
    description:
      "Project Challange Brief Team di Skilvul Program Studi Independen",
    image: "/case study8.png",
    alt: "amartha",
    link:
      "https://medium.com/@m7607038/ux-case-study-gold-investment-in-amartha-amartha-design-challange-6c805966086c",
    role: "As UI/UX Designer",
    figma: true,
  },
  {
    title: "Use Case Study - SkyEdu",
    description:
      "Project Challange Brief Team di Skilvul Program Studi Independen",
    image: "/SkyEdu.png",
    alt: "skyedu",
    link: "https://medium.com/@m7607038/skyedu-ux-case-study-944fd0b2809b",
    role: "As UI/UX Designer",
    figma: true,
  },
  {
    title: "Use Case Study Laundry App",
    description: "Human-computer interaction course assignments",
    image: "/mockup laundry app 1.png",
    alt: "laundry",
    link: "https://medium.com/@m7607038/laundry-app-ux-case-study-740cb76bd6de",
    role: "As UI/UX Designer",
    figma: true,
  },
];
