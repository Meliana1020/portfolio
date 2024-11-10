import { useEffect } from "react";
import SidebarMenu from "../Components/Elements/SidebarMenu/sidebarMenu";
import CardLayout from "../Components/Layouts/CardLayout";
import HomeContent from "../Components/Layouts/HomeContect";
import ProfileContent from "../Components/Layouts/ProfileContent";
import ResumeContent from "../Components/Layouts/ResumeContent";
import PortfolioContent from "../Components/Layouts/PortfolioContent";
import SkillsContent from "../Components/Layouts/SkillsContent";

const MainPage = () => {
  return (
    <>
      <SidebarMenu />
      <div className="bg-black min-h-screen flex flex-col sm:flex-row">
        <div className="sm:fixed p-4">
          <CardLayout />
        </div>

        <div className="sm:ml-[30%] p-4">
          <HomeContent />
          <ProfileContent />
          <ResumeContent />
          <SkillsContent />
          <PortfolioContent />
        </div>
      </div>
    </>
  );
};

export default MainPage;
