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
    <div className="mt-28 fixed right-0 md:right-0 top-3/4 lg:top-auto flex flex-row lg:flex-col items-center justify-start m-8 border rounded-xl z-50">
      <button className="p-3 rounded-full hover:bg-gray-600 active:bg-orange-600" onClick={goToHome}>
        <img src="/public/home.svg" alt="home icon" />
      </button>
      <button className="p-3 rounded-full hover:bg-gray-600 active:bg-orange-600" onClick={goToProfile}>
        <img src="/public/account.svg" alt="profile icon" />
      </button>
      <button className="p-3 rounded-full hover:bg-gray-600 active:bg-orange-600">
        <img src="/public/clarity_tools.svg" alt="tools icon" />
      </button>
      <button className="p-3 rounded-full hover:bg-gray-600 active:bg-orange-600">
        <img src="/public/tools.svg" alt="more tools icon" />
      </button>
      <button className="p-3 rounded-full hover:bg-gray-600 active:bg-orange-600">
        <img src="/public/dashicons_portfolio.svg" alt="portfolio icon" />
      </button>
      <button className="p-3 rounded-full hover:bg-gray-600 active:bg-orange-600">
        <img src="/public/setting.svg" alt="settings icon" />
      </button>
      <button className="p-3 rounded-full hover:bg-gray-600 active:bg-orange-600">
        <img src="/public/chat.svg" alt="chat icon" />
      </button>
    </div>
  );
};

export default SidebarMenu;
