// src/constants/sidebarLinks.js
import { FaHome, FaUser, FaBriefcase, FaWindowRestore } from "react-icons/fa";
import { TbTools } from "react-icons/tb";
import { MdChat } from "react-icons/md";

export const ICON_CLASSES =
  "text-gray-500 hover:text-orange-300 transition-colors duration-100 lg:w-14 w-12 group-[.active]:text-orange-500";

export const sidebarLinks = [
  { to: "home", icon: FaHome, offset: -80, tooltip: "Home" },
  { to: "profile", icon: FaUser, offset: -70, tooltip: "Profile" },
  { to: "resume", icon: FaBriefcase, offset: -70, tooltip: "Resume" },
  { to: "skills", icon: TbTools, offset: -80, tooltip: "Skills" },
  { to: "porto", icon: FaWindowRestore, offset: -90, tooltip: "Portfolio" },
  { to: "contact", icon: MdChat, offset: -30, tooltip: "Contact Me" },
];
