import { SiNextdotjs, SiCss3, SiShadcnui, SiTypescript } from "react-icons/si";
import { FaHtml5, FaGitAlt, FaGithub } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiReactjsFill } from "react-icons/ri";
import { BiLogoTailwindCss } from "react-icons/bi";

const SkillsContent = () => {
  return (
    <>
      <div className="text-white mt-24" id="skills">
        <div className="flex flex-row border  p-2 rounded-lg w-fit mb-12">
          <img src="/tools.svg" alt="" className="w-4" />
          <p className="pl-2 text-xs">SKILLS</p>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6 mb-6 w-full">
          <FaHtml5 className="hover:brightness-50 text-6xl sm:text-7xl md:text-8xl" />
          <SiCss3 className="hover:brightness-50 text-6xl sm:text-7xl md:text-8xl" />
          <IoLogoJavascript className="hover:brightness-50 text-6xl sm:text-7xl md:text-8xl" />
          <SiTypescript className="hover:brightness-50 text-6xl sm:text-7xl md:text-8xl"/>
          <RiReactjsFill className="hover:brightness-50 text-6xl sm:text-7xl md:text-8xl" />
          <SiNextdotjs className="hover:brightness-50 text-6xl sm:text-7xl md:text-8xl" />
          <BiLogoTailwindCss className="hover:brightness-50 text-6xl sm:text-7xl md:text-8xl" />
          <SiShadcnui className="hover:brightness-50 text-6xl sm:text-7xl md:text-8xl" />
          <FaGitAlt className="hover:brightness-50 text-6xl sm:text-7xl md:text-8xl" />
          <FaGithub className="hover:brightness-50 text-6xl sm:text-7xl md:text-8xl" />
        </div>
      </div>
    </>
  );
};

export default SkillsContent;
