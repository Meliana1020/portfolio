const ResumeContent = () => {
  const experiences = [
    {
      period: "Jan - Mei 2025",
      title: "PT Minilemon Nusantara",
      role: "Frontend Developer",
    },
    {
      period: "Aug - Dec 2024",
      title: "Bootcamp Harisenin.com",
      role: "Fullstack Development",
    },
    {
      period: "Aug - Dec 2022",
      title: "PT. Impactbyte Teknologi Edukasi (Skilvul)",
      role: "UI/UX Design Mastery",
    },
  ];

  const educations = [
    {
      period: "2019 - 2024",
      title: "Al Qur'an Science University",
      major: "Informatics Engineering",
    },
    {
      period: "2016-2019",
      title: "Vocational Hight School Takhassus Al-Qur'an",
      major: "Software Engineering",
    },
  ];

  const TimelineItem = ({ period, title, description }) => (
    <div className="flex flex-row">
      <div className="flex flex-col">
        <div className="border-slate-300 border rounded-xl w-4 h-4" />
        <div className="bg-slate-300 w-[0.5px] h-24 sm:h-20 md:h-16 ml-2" />
      </div>
      <div className="ml-4">
        <div className="text-lg">{period}</div>
        <div className="text-xl font-semibold md:text-base">{title}</div>
        <div className="text-xl text-neutral-500">{description}</div>
      </div>
    </div>
  );

  const SectionHeader = ({ icon, title }) => (
    <div className="flex flex-row border p-2 rounded-lg w-fit mb-12">
      <img src={icon} alt="" className="w-4" />
      <p className="pl-2 text-xs">{title}</p>
    </div>
  );

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