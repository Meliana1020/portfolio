import { 
  SiNextdotjs, SiCss3, SiShadcnui, SiTypescript,
  SiNestjs, SiFirebase, SiExpress, SiNotion,
  SiMysql
} from "react-icons/si";
import { FaHtml5, FaGitAlt, FaGithub } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiReactjsFill, RiSupabaseFill } from "react-icons/ri";
import { BiLogoTailwindCss, BiLogoFigma, BiLogoPostgresql } from "react-icons/bi";

const SkillsContent = () => {
  const skills = {
    "Frontend": [
      { Icon: FaHtml5, name: "HTML5" },
      { Icon: SiCss3, name: "CSS3" },
      { Icon: IoLogoJavascript, name: "JavaScript" },
      { Icon: SiTypescript, name: "TypeScript" },
      { Icon: RiReactjsFill, name: "React" },
      { Icon: SiNextdotjs, name: "Next.js" },
      { Icon: BiLogoTailwindCss, name: "Tailwind CSS" },
      { Icon: SiShadcnui, name: "Shadcn/ui" }
    ],
    "Backend": [
      { Icon: SiNestjs, name: "NestJS" },
      { Icon: SiExpress, name: "Express" },
      { Icon: RiSupabaseFill, name: "Supabase" },
      { Icon: SiFirebase, name: "Firebase" },
      { Icon: SiMysql, name: "MySQL" },
      { Icon: BiLogoPostgresql, name: "PostgreSQL" }
    ],
    "Tools": [
      { Icon: FaGitAlt, name: "Git" },
      { Icon: FaGithub, name: "GitHub" },
      { Icon: BiLogoFigma, name: "Figma" },
      { Icon: SiNotion, name: "Notion" }
    ]
  };

  return (
    <div className="text-white mt-24" id="skills">
      <div className="flex items-center border p-2 rounded-lg w-fit mb-8">
        <img src="/tools.svg" alt="Tools icon" className="w-4 h-4" />
        <span className="ml-2 text-xs">SKILLS</span>
      </div>

      {Object.entries(skills).map(([category, items]) => (
        <div key={category} className="mb-8">
          <h3 className="text-lg font-semibold mb-3">{category}</h3>
          <div className="grid grid-cols-5 gap-2 md:gap-2">
            {items.map(({ Icon, name }) => (
              <div key={name} className="flex flex-col group">
                <Icon className="
                  text-4xl md:text-5xl
                  text-gray-400 hover:text-orange-500
                  transition-colors duration-200
                "/>
                <span className="
                  mt-1 text-xs md:text-sm
                  opacity-0 group-hover:opacity-100
                  transition-opacity duration-200
                  text-center
                ">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsContent;