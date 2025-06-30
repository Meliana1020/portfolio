import HomeContent from "./HomeContent";
import ProfileContent from "./ProfileContent";
import ResumeContent from "./ResumeContent";
import SkillsContent from "./SkillsContent";
import PortfolioContent from "./PortfolioContent";
import ContactContent from "./ContactContent"
const ContentLayout = () => {
    return(
        <div className="sm:ml-[60px] md:ml-[430px] p-4">
          <HomeContent/>
          <ProfileContent/>
          <ResumeContent/>
          <SkillsContent/>
          <PortfolioContent/>
          <ContactContent />  
        </div>
    )
}

export default ContentLayout;