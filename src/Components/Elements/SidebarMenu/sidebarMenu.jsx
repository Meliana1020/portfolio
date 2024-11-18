import React from "react";
import { Link } from "react-scroll";

const SidebarMenu = () => {
  return (
    <div className="fixed right-7 left-7 lg:right-0 sm:right-7 bottom-6 lg:bottom-20 sm:bottom-24 justify-between py-6 bg-zinc-700 flex flex-row lg:flex-col md:flex-row md:bottom-4 md:right-10 md:w-[40%] md:h-12 lg:w-[4%] lg:h-[65%] sm:flex-col items-center sm:justify-between sm:gap-3 md:gap-4 lg:gap-6 gap-2 lg:m-7 border rounded-xl z-50 sm:h-96 sm:w-14 w-80 h-10 sm:pt-4 sm:pb-4">
      <Link
        activeClass="active bg-orange-400 rounded-full scale-50"
        to="home"
        spy={true}
        smooth={true}
        offset={-80}
        duration={50}
        className="p-4 sm:py-5"
      >
        <img
          className="brightness-100 hover:brightness-50 rounded-full w-6"
          src="/home.svg"
          alt="home icon"
        />
      </Link>

      <Link
        activeClass="active bg-orange-400 rounded-full  scale-50"
        to="profile"
        spy={true}
        smooth={true}
        offset={-80}
        duration={50}
        className="p-4 sm:py-5"
      >
        <img
          className="brightness-100 hover:brightness-50 active:brightness-50 rounded-full w-6"
          src="/account.svg"
          alt="profile icon"
        />
      </Link>

      <Link
        activeClass="active bg-orange-400 rounded-full  scale-50"
        to="resume"
        spy={true}
        smooth={true}
        offset={-70}
        duration={50}
        className="p-4 sm:py-5"
      >
        <img
          className="brightness-100 hover:brightness-50 active:brightness-50 rounded-full w-6"
          src="/clarity_tools.svg"
          alt="tools icon"
        />
      </Link>

      <Link
        activeClass="active bg-orange-400 rounded-full scale-50"
        to="skills"
        spy={true}
        smooth={true}
        offset={-80}
        duration={50}
        className="p-4 sm:py-5"
      >
        <img
          className="brightness-100 hover:brightness-50 active:brightness-50 rounded-full w-6"
          src="/tools.svg"
          alt="more tools icon"
        />
      </Link>

      <Link
        activeClass="active bg-orange-400 rounded-full  scale-50"
        to="porto"
        spy={true}
        smooth={true}
        offset={-80}
        duration={50}
        className="p-4 sm:py-5"
      >
        <img
          className="brightness-100 hover:brightness-50 active:brightness-50 rounded-full w-6"
          src="/dashicons_portfolio.svg"
          alt="portfolio icon"
        />
      </Link>
    </div>
  );
};

export default SidebarMenu;
