import { useEffect } from "react";
import SidebarMenu from "../Components/Elements/SidebarMenu/sidebarMenu";
import CardLayout from "../Components/Layouts/CardLayout";
import HomeContent from "../Components/Layouts/HomeContent";
import ProfileContent from "../Components/Layouts/ProfileContent";
import ResumeContent from "../Components/Layouts/ResumeContent";
import PortfolioContent from "../Components/Layouts/PortfolioContent";
import SkillsContent from "../Components/Layouts/SkillsContent";
import ContentLayout from "../Components/Layouts/ContentLayout";

const MainPage = () => {
  return (
    <>
      <SidebarMenu />
      <div className="bg-black min-h-screen flex flex-col sm:flex-col">
        <div className="lg:fixed md:fixed sm:p-4 h-full">
          <CardLayout />
        </div>

        <ContentLayout/>
      </div>
    </>
  );
};

export default MainPage;
