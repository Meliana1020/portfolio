import React from "react";
import { Link} from 'react-scroll';

const SidebarMenu = () => {
  return (
    <div className="justify-between py-6 bg-zinc-700 mt-40 sm:mt-40 fixed right-0 top-2/3 sm:top-1/2 sm:transform sm:-translate-y-1/2 md:right-0 lg:top-1/4 flex flex-row lg:flex-col items-center sm:justify-between sm:gap-2 m-7 border rounded-xl z-50 sm:h-96 sm:w-14 w-80 h-10 sm:pt-4 sm:pb-4">
      <Link
        activeClass="active bg-orange-400 rounded-full scale-50"
        to="home"
        spy={true}
        smooth={true}
        offset={100}
        duration={500}
        className="p-4 sm:py-5"
      >
        <img
          className="brightness-100 hover:brightness-50 rounded-full w-6 "
          src="/home.svg"
          alt="home icon"
        />
      </Link>

      <Link
        activeClass="active bg-orange-400 rounded-full  scale-50"
        to="profile"
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}
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
        offset={-100}
        duration={500}
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
        offset={-100}
        duration={500}
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
        offset={-100}
        duration={500}
        className="p-4 sm:py-5"
      >
        <img
          className="brightness-100 hover:brightness-50 active:brightness-50 rounded-full w-6"
          src="/dashicons_portfolio.svg"
          alt="portfolio icon"
        />
      </Link>

      {/* <Link
        activeClass="active bg-orange-400 rounded-full  scale-50"
        to="contact"
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}
        className="p-4 sm:py-5"
      >
        <img
          className="brightness-100 hover:brightness-50 active:brightness-50 rounded-full w-6"
          src="/chat.svg"
          alt="chat icon"
        />
      </Link> */}

      {/* <button className="p-3 rounded-full hover:bg-gray-600 active:bg-orange-600">
        <img src="/public/setting.svg" alt="settings icon" />
      </button>
      <button className="p-3 rounded-full hover:bg-gray-600 active:bg-orange-600">
        <img src="/public/chat.svg" alt="chat icon" />
      </button> */}
    </div>
  );
};

export default SidebarMenu;
