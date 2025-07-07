import { SiNextdotjs, SiCss3, SiShadcnui, SiTypescript  } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { RiReactjsFill } from "react-icons/ri";
import { BiLogoTailwindCss } from "react-icons/bi";
import { FaHtml5 } from "react-icons/fa";
const PortfolioContent = () => {
  return (
    <>
      <div className="text-white mt-24 w-full lg:w-[90%] " id="porto">
        <div className="flex flex-row border  p-2 rounded-lg w-fit mb-12">
          <img src="/clarity_tools.svg" alt="" className="w-4" />
          <p className="pl-2 text-xs">PORTFOLIOS</p>
        </div>

        <div
          className="card bg-base-100 w-full shadow-xl mb-4 cursor-pointer"
          onClick={() =>
            (window.location.href = "https://trans-sabawana.vercel.app/")
          }
        >
          <figure>
            <img
              className="brightness-50 hover:brightness-100"
              src="/thumbnail trans sabawana.png"
              alt="transsabawana"
            />
          </figure>
          <div className="card-body bg-zinc-800 rounded-b-xl">
            <h2 className="card-title">Trans Sabawana</h2>
            <p className="text-zinc-400">Landing Page for Trans Sabawana</p>
            <div className="card-actions justify-end mt-2 gap-4">
              <SiTypescript className="w-10 h-10 brightness-50 hover:brightness-100"/>
              <SiNextdotjs className="w-10 h-10 brightness-50 hover:brightness-100" />
              <BiLogoTailwindCss className="w-10 h-10 brightness-50 hover:brightness-100" />
              <SiShadcnui className="w-10 h-10 brightness-50 hover:brightness-100" />
            </div>
          </div>
        </div>

        <div
          className="card bg-base-100 w-full shadow-xl mb-4 cursor-pointer"
          onClick={() =>
            (window.location.href =
              "https://mission2fe-education-course.vercel.app/")
          }
        >
          <figure>
            <img
              className="brightness-50 hover:brightness-100"
              src="/thumbnail edu.svg"
              alt="todolist"
            />
          </figure>
          <div className="card-body bg-zinc-800 rounded-b-xl">
            <h2 className="card-title">Education Course</h2>
            <p className="text-zinc-400">
              Mission Fullstack Development in Bootcamp Harisenin.com
            </p>
            <div className="card-actions justify-end mt-2 gap-4">
              <IoLogoJavascript className="w-10 h-10 brightness-50 hover:brightness-100" />
              <RiReactjsFill className="w-10 h-10 brightness-50 hover:brightness-100" />
              <BiLogoTailwindCss className="w-10 h-10 brightness-50 hover:brightness-100" />
            </div>
          </div>
        </div>

        <div className="card bg-base-100 w-full shadow-xl mb-4">
          <figure>
            <img
              className="brightness-50 hover:brightness-100"
              src="/thumbnail porto.png"
              alt="todolist"
            />
          </figure>
          <div className="card-body bg-zinc-800 rounded-b-xl">
            <h2 className="card-title">Portfolio</h2>
            <p className="text-zinc-400">
              Mission Fullstack Development in Bootcamp Harisenin.com
            </p>
            <div className="card-actions justify-end mt-2 gap-4">
            <IoLogoJavascript className="w-10 h-10 brightness-50 hover:brightness-100" />
              <RiReactjsFill className="w-10 h-10 brightness-50 hover:brightness-100" />
              <BiLogoTailwindCss className="w-10 h-10 brightness-50 hover:brightness-100" />
            </div>
          </div>
        </div>

        <div
          className="card bg-base-100 w-full shadow-xl mb-4 cursor-pointer"
          onClick={() =>
            (window.location.href = "https://todolist-psi-ecru.vercel.app/")
          }
        >
          <figure>
            <img
              className="brightness-50 hover:brightness-100"
              src="/thumbnail todolist.png"
              alt="todolist"
            />
          </figure>
          <div className="card-body bg-zinc-800 rounded-b-xl">
            <h2 className="card-title">To Do List</h2>
            <p className="text-zinc-400">
              Mission Fullstack Development in Bootcamp Harisenin.com
            </p>
            <div className="card-actions justify-end mt-2 gap-4">
             <FaHtml5 className="w-10 h-10 brightness-50 hover:brightness-100" />
              <SiCss3 className="w-10 h-10 brightness-50 hover:brightness-100" />
              <IoLogoJavascript className="w-10 h-10 brightness-50 hover:brightness-100" />
            </div>
          </div>
        </div>

        <div
          className="card bg-base-100 w-full shadow-xl mb-4 cursor-pointer"
          onClick={() =>
            (window.location.href =
              "https://medium.com/@m7607038/ux-case-study-gold-investment-in-amartha-amartha-design-challange-6c805966086c")
          }
        >
          <figure>
            <img
              className="brightness-50 hover:brightness-100"
              src="/case study8.png"
              alt="todolist"
            />
          </figure>
          <div className="card-body bg-zinc-800 rounded-b-xl">
            <h2 className="card-title">
              Use Case Study - Amartha Gold Investmen
            </h2>
            <p className="text-zinc-400">
              Project Challange Brief Team di Skilvul Program Studi Independen
            </p>
            <p className="text-zinc-300">As UI/UX Designer</p>
            <div className="card-actions justify-end mt-2">
              <img
                className="w-8 brightness-50 hover:brightness-100
                "
                src="/figma.svg"
                alt=""
              />
            </div>
          </div>
        </div>

        <div
          className="card bg-base-100 w-full shadow-xl mb-4 cursor-pointer"
          onClick={() =>
            (window.location.href =
              "https://medium.com/@m7607038/skyedu-ux-case-study-944fd0b2809b")
          }
        >
          <figure>
            <img
              className="brightness-50 hover:brightness-100"
              src="/SkyEdu.png"
              alt="todolist"
            />
          </figure>
          <div className="card-body bg-zinc-800 rounded-b-xl">
            <h2 className="card-title">Use Case Study - SkyEdu</h2>
            <p className="text-zinc-400">
              Project Challange Brief Team di Skilvul Program Studi Independen
            </p>
            <p className="text-zinc-300">As UI/UX Designer</p>
            <div className="card-actions justify-end mt-2">
              <img
                className="w-8 brightness-50 hover:brightness-100
                "
                src="/figma.svg"
                alt=""
              />
            </div>
          </div>
        </div>

        <div
          className="card bg-base-100 w-full shadow-xl mb-4 cursor-pointer"
          onClick={() =>
            (window.location.href =
              "https://medium.com/@m7607038/laundry-app-ux-case-study-740cb76bd6de")
          }
        >
          <figure>
            <img
              className="brightness-50 hover:brightness-100"
              src="/mockup laundry app 1.png"
              alt="todolist"
            />
          </figure>
          <div className="card-body bg-zinc-800 rounded-b-xl">
            <h2 className="card-title">Use Case Study Laundry App</h2>
            <p className="text-zinc-400">
              Human-computer interaction course assignments
            </p>
            <p className="text-zinc-300">As UI/UX Designer</p>
            <div className="card-actions justify-end mt-2">
              <img
                className="w-8 brightness-50 hover:brightness-100
                "
                src="/figma.svg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioContent;
