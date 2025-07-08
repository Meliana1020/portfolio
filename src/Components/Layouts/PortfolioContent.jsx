import { projectData } from "../../data/portfolio";
import ProjectCard from "../Fragments/card-portfolio";

const PortfolioContent = () => {
  return (
    <div className="text-white mt-24 w-full lg:w-[90%]" id="porto">
      <div className="flex flex-row border p-2 rounded-lg w-fit mb-12">
        <img src="/clarity_tools.svg" alt="" className="w-4" />
        <p className="pl-2 text-xs">PORTFOLIOS</p>
      </div>

      {projectData.map((project, idx) => (
        <ProjectCard key={idx} {...project} />
      ))}
    </div>
  );
};

export default PortfolioContent;
