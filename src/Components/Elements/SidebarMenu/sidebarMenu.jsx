import React from "react";
import { Link } from "react-scroll";
import { FaHome, FaUser, FaBriefcase, FaWindowRestore } from "react-icons/fa";
import { TbTools } from "react-icons/tb";
import { MdChat } from "react-icons/md";

const LINK_PROPS = {
  spy: true,
  smooth: true,
  duration: 10,
  className: "sm:py-2 group",
  activeClass: "active"
};

const ICON_CLASSES = "text-gray-500 hover:text-orange-300 transition-colors duration-100 lg:w-14 w-12 group-[.active]:text-orange-500";

const SidebarMenu = () => {
  const links = [
    {
      to: "home",
      icon: <FaHome className={ICON_CLASSES} />,
      offset: -80,
      tooltip: "Home"
    },
    {
      to: "profile",
      icon: <FaUser className={ICON_CLASSES} />,
      offset: -70,
      tooltip: "Profile"
    },
    {
      to: "resume",
      icon: <FaBriefcase className={ICON_CLASSES} />,
      offset: -70,
      tooltip: "Resume"
    },
    {
      to: "skills",
      icon: <TbTools className={ICON_CLASSES} />,
      offset: -80,
      tooltip: "Skills"
    },
    {
      to: "porto",
      icon: <FaWindowRestore className={ICON_CLASSES} />,
      offset: -90,
      tooltip: "Portfolio"
    },
    {
      to: "contact",
      icon: <MdChat className={ICON_CLASSES} />,
      offset: -30,
      tooltip: "Contact Me"
    }
  ];

  return (
    <div className="
      fixed right-7 bottom-6 
      flex flex-row items-center justify-center 
      p-6 gap-0 border rounded-xl z-30 
      w-[85%] h-[5%] 
      lg:p-4 lg:right-0 lg:m-6 lg:w-[4%] lg:h-[50%] 
      lg:flex-col lg:gap-8 lg:items-center lg:justify-center lg:bottom-1/4 
      sm:right-7 sm:bottom-24 sm:flex-col sm:justify-between sm:gap-3 sm:h-96 sm:w-14 sm:pt-4 sm:pb-4 
      md:justify-end md:flex-row md:bottom-4 md:w-[40%] md:h-12 md:gap-4 
    bg-zinc-700
    ">
      {links.map((link, index) => (
         <div 
          key={link.to} 
          className="tooltip tootltip-top lg:tooltip-left sm:tooltip-top md:tooltip-top " 
          data-tip={link.tooltip}
          data-side="top"
        >
          <Link
            to={link.to}
            {...LINK_PROPS}
            offset={link.offset}
          >
            {link.icon}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default SidebarMenu;