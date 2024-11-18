import HomeContent from "./HomeContent";
import ProfileContent from "./ProfileContent";
import ResumeContent from "./ResumeContent";
import SkillsContent from "./SkillsContent";
import PortfolioContent from "./PortfolioContent";

const ContentLayout = () => {
    return(
        <div className="sm:mr-[80px] sm:ml-[60px] md:ml-[430px] p-4">
          <HomeContent/>
          <ProfileContent/>
          <ResumeContent/>
          <SkillsContent/>
          <PortfolioContent/>  
        </div>
    )
}

export default ContentLayout;