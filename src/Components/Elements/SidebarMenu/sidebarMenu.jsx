import React from "react";
import { useNavigate } from "react-router-dom";

const SidebarMenu = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };

  const goToProfile = () => {
    navigate("/profile");
  };

  return (
    <div className="bg-zinc-700 mt-64 sm:mt-40 fixed right-0 top-2/4 sm:top-1/2 sm:transform sm:-translate-y-1/2 md:right-0 lg:top-1/4 flex flex-row lg:flex-col items-center justify-center m-7 border rounded-xl z-50 sm:h-90 sm:w-14 w-80 sm:pt-4 sm:pb-4">
 <button className="p-3 sm:py-5" onClick={goToHome}>
        <img className="brightness-100 hover:brightness-50 active:brightness-75 rounded-full" src="/public/home.svg" alt="home icon" />
      </button>
      <button className="p-3 sm:py-5" onClick={goToProfile}>
        <img className="brightness-100 hover:brightness-50 active:brightness-75 rounded-full" src="/public/account.svg" alt="profile icon" />
      </button>
      <button className="p-3 sm:py-5">
        <img className="brightness-100 hover:brightness-50 active:brightness-75 rounded-full" src="/public/clarity_tools.svg" alt="tools icon" />
      </button>
      <button className="p-3  sm:py-5 ">
        <img className="brightness-100 hover:brightness-50 active:brightness-75 rounded-full" src="/public/tools.svg" alt="more tools icon" />
      </button>
      <button className="p-3 sm:py-5 ">
        <img className="brightness-100 hover:brightness-50 active:brightness-75 rounded-full" src="/public/dashicons_portfolio.svg" alt="portfolio icon" />
      </button>
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
