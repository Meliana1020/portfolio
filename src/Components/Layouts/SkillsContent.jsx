const SkillsContent = () => {
  return (
    <>
      <div className="mx-6 text-white mt-24" id="skills">
        <div className="flex flex-row border  p-2 rounded-lg w-fit mb-12">
          <img src="/tools.svg" alt="" className="w-4" />
          <p className="pl-2 text-xs">SKILLS</p>
        </div>
        
        <div className="flex flex-row w-20 sm:w-32 mb-6 brightness-100">
            <img className="hover:brightness-50 mr-4" src="/html.svg" alt="" />
            <img className="hover:brightness-50 mr-4" src="/css.svg" alt="" />
            <img className="mb-2 mr-4" src="/js.svg" alt="" />
          </div>
          <div className="flex flex-row w-16 sm:w-32">
            <img className="hover:brightness-50 mr-10" src="/reactt.svg" alt="" />
            <img className="hover:brightness-50 mr-8" src="/tailwind.svg" alt="" />
            <img className="hover:brightness-50 mr-4" src="/git.svg" alt="" />
          </div>  
       
      </div>
    </>
  );
};

export default SkillsContent;
