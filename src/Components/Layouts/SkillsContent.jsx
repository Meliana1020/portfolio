const SkillsContent = () => {
  return (
    <>
      <div className="text-white mt-24" id="skills">
        <div className="flex flex-row border  p-2 rounded-lg w-fit mb-12">
          <img src="/tools.svg" alt="" className="w-4" />
          <p className="pl-2 text-xs">SKILLS</p>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6 w-full md:w-[200px] lg:w-[450px] sm:w-32 brightness-100">
          <img
            className="hover:brightness-50"
            src="/html.svg"
            alt="HTML Icon"
          />
          <img className="hover:brightness-50" src="/css.svg" alt="CSS Icon" />
          <img
            className="hover:brightness-50"
            src="/js.svg"
            alt="JavaScript Icon"
          />
          <img
            className="hover:brightness-50"
            src="/reactt.svg"
            alt="React Icon"
          />
          <img
            className="hover:brightness-50"
            src="/tailwind.svg"
            alt="Tailwind Icon"
          />
          <img className="hover:brightness-50" src="/git.svg" alt="Git Icon" />
        </div>
      </div>
    </>
  );
};

export default SkillsContent;
