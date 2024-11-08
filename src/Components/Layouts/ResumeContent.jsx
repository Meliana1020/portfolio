const ResumeContent = () => {
  return (
    <>
      <div className="m-6 text-white mt-16">
        <div className="flex flex-row border  p-2 rounded-lg w-fit mb-12">
          <img src="./public/clarity_tools.svg" alt="" className="w-4" />
          <p className="pl-2 text-xs">RESUME</p>
        </div>

        <div className="text-2xl font-semibold mb-6">Experience & Certification</div>
        <div className="flex flex-row">
          <div className="flex flex-col">
            <div className="border-slate-300 border rounded-xl w-4 h-4 "></div>
            <div className="bg-slate-300 w-[0.5px] h-24 ml-2"></div>
          </div>
          <div className="ml-4">
            <div className="text-lg">2024</div>
            <div className="text-xl font-semibold">Bootcmp Harisenin.com</div>
            <div className="text-xl text-neutral-500">Fullstack Development</div>
          </div>
        </div>

        <div className="flex flex-row">
          <div className="flex flex-col">
            <div className="border-slate-300 border rounded-xl w-4 h-4 "></div>
            <div className="bg-slate-300 w-[0.5px] h-24 ml-2"></div>
          </div>
          <div className="ml-4">
            <div className="text-lg">2022</div>
            <div className="text-xl font-semibold">PT. Impactbyte Teknologi Edukasi (Skilvul)</div>
            <div className="text-xl text-neutral-500">UI/UX Design Mastery</div>
          </div>
        </div>

        <div className="text-2xl font-semibold mb-6 mt-10">Education</div>
        <div className="flex flex-row">
          <div className="flex flex-col">
            <div className="border-slate-300 border rounded-xl w-4 h-4 "></div>
            <div className="bg-slate-300 w-[0.5px] h-24 ml-2"></div>
          </div>
          <div className="ml-4">
            <div className="text-lg">2019 - 2024</div>
            <div className="text-xl font-semibold">Al Qur'an Science University</div>
            <div className="text-xl text-neutral-500">Informatics Engineeering</div>
          </div>
        </div>

        <div className="flex flex-row">
          <div className="flex flex-col">
            <div className="border-slate-300 border rounded-xl w-4 h-4 "></div>
            <div className="bg-slate-300 w-[0.5px] h-24 ml-2"></div>
          </div>
          <div className="ml-4">
            <div className="text-lg">2016-2019</div>
            <div className="text-xl font-semibold">Vocational Hight School Takhassus Al-Qur'an</div>
            <div className="text-xl text-neutral-500">Software Engineering</div>
          </div>
        </div>

      </div>
    </>
  );
};

export default ResumeContent;
