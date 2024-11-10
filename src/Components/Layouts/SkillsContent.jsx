const SkillsContent = () => {
  return (
    <>
      <div className="m-6 text-white mt-24">
        <div className="flex flex-row border  p-2 rounded-lg w-fit mb-12">
          <img src="./public/tools.svg" alt="" className="w-4" />
          <p className="pl-2 text-xs">SKILLS</p>
        </div>
          <div className="flex flex-row w-24 sm:w-32 mb-6 brightness-100">
            <img className="hover:brightness-50 mr-4" src="./public/html.svg" alt="" />
            <img className="hover:brightness-50 mr-4" src="./public/css.svg" alt="" />
            <img className="mb-2 mr-4" src="./public/js.svg" alt="" />
          </div>
          <div className="flex flex-row w-20 sm:w-32">
            <img className="hover:brightness-50 mr-10" src="./public/reactt.svg" alt="" />
            <img className="hover:brightness-50 mr-8" src="./public/tailwind.svg" alt="" />
            <img className="hover:brightness-50 mr-4" src="./public/git.svg" alt="" />
          </div>
       
      </div>
    </>
  );
};

export default SkillsContent;
