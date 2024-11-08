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
    <div className="bg-black min-h-screen flex flex-col">
      <CardLayout />
        <SidebarMenu />
     <HomeContent/>
     <ProfileContent/>
     <ResumeContent/>
     <SkillsContent/>
     <PortfolioContent/>
    </div>
  );
};

export default MainPage;
