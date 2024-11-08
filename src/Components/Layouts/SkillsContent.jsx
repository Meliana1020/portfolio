const SkillsContent = () => {
  return (
    <>
      <div className="m-6 text-white mt-24">
        <div className="flex flex-row border  p-2 rounded-lg w-fit mb-12">
          <img src="/public/tools.svg" alt="" className="w-4" />
          <p className="pl-2 text-xs">SKILLS</p>
        </div>

          <div className="flex flex-row w-24 mb-6">
            <img className="mr-4" src="/public/html.svg" alt="" />
            <img className="mr-4" src="/public/css.svg" alt="" />
            <img className="mb-2 mr-4" src="/public/js.svg" alt="" />
          </div>
          <div className="flex flex-row w-20">
            <img className="mr-10" src="/public/reactt.svg" alt="" />
            <img className="mr-8" src="/public/tailwind.svg" alt="" />
            <img className="mr-4" src="/public/git.svg" alt="" />
          </div>
       
      </div>
    </>
  );
};

export default SkillsContent;
