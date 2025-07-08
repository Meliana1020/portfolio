import SectionHeader from "../Elements/section-header";
import TimelineItem from "../Fragments/timeline-resume";
import { experiences, educations } from "../../data/resume";

const ResumeContent = () => {
  return (
    <div className="text-white mt-16" id="resume">
      <SectionHeader icon="/clarity_tools.svg" title="RESUME" />

      <h2 className="text-2xl font-semibold mb-6">Experience & Certification</h2>
      {experiences.map((exp, index) => (
        <TimelineItem
          key={index}
          period={exp.period}
          title={exp.title}
          description={exp.role}
        />
      ))}

      <h2 className="text-2xl font-semibold mb-6 mt-10">Education</h2>
      {educations.map((edu, index) => (
        <TimelineItem
          key={index}
          period={edu.period}
          title={edu.title}
          description={edu.major}
        />
      ))}
    </div>
  );
};

export default ResumeContent;
