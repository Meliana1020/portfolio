import { Navigate } from "react-router-dom";

const PortfolioContent = () => {
  return (
    <>
      <div className="m-6 text-white mt-24">
        <div className="flex flex-row border  p-2 rounded-lg w-fit mb-12">
          <img src="/public/clarity_tools.svg" alt="" className="w-4" />
          <p className="pl-2 text-xs">PORTFOLIOS</p>
        </div>

        <div className="card bg-base-100 w-full shadow-xl mb-4">
          <figure>
            <img
              className="brightness-50 hover:brightness-100"
              src="/public/thumbnail todolist.png"
              alt="todolist"
            />
          </figure>
          <div className="card-body bg-zinc-800 rounded-b-xl">
            <h2 className="card-title">To Do List</h2>
            <p className="text-zinc-400">
              Mission Fullstack Development in Bootcamp Harisenin.com
            </p>
            <div className="card-actions justify-end mt-2">
              <img
                className="w-8 brightness-50 hover:brightness-100
                "
                src="/public/html.svg"
                alt=""
              />
              <img
                className="w-8 brightness-50 hover:brightness-100
                "
                src="/public/css.svg"
                alt=""
              />
              <img
                className="w-8 brightness-50 hover:brightness-100
                "
                src="/public/js.svg"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="card bg-base-100 w-full shadow-xl mb-4">
          <figure>
            <img
              className="brightness-50 hover:brightness-100"
              src="/public/thumbnail edu.svg"
              alt="todolist"
            />
          </figure>
          <div className="card-body bg-zinc-800 rounded-b-xl">
            <h2 className="card-title">Education Course</h2>
            <p className="text-zinc-400">Mission Fullstack Development in Bootcamp Harisenin.com</p>
            <div className="card-actions justify-end mt-2">
              <img
                className="w-8 brightness-50 hover:brightness-100
                "
                src="/public/js.svg"
                alt=""
              />
              <img
                className="w-8 brightness-50 hover:brightness-100
                "
                src="/public/reactt.svg"
                alt=""
              />
              <img
                className="w-8 brightness-50 hover:brightness-100
                "
                src="/public/tailwind.svg"
                alt=""
              />
            </div>
          </div>
        </div>
        
        <div className="card bg-base-100 w-full shadow-xl mb-4">
          <figure>
            <img
              className="brightness-50 hover:brightness-100"
              src="/public/thumbnail edu.svg"
              alt="todolist"
            />
          </figure>
          <div className="card-body bg-zinc-800 rounded-b-xl">
            <h2 className="card-title">Portfolio</h2>
            <p className="text-zinc-400">Mission Fullstack Development in Bootcamp Harisenin.com</p>
            <div className="card-actions justify-end mt-2">
              <img
                className="w-8 brightness-50 hover:brightness-100
                "
                src="/public/js.svg"
                alt=""
              />
              <img
                className="w-8 brightness-50 hover:brightness-100
                "
                src="/public/reactt.svg"
                alt=""
              />
              <img
                className="w-8 brightness-50 hover:brightness-100
                "
                src="/public/tailwind.svg"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="card bg-base-100 w-full shadow-xl mb-4">
          <figure>
            <img
              className="brightness-50 hover:brightness-100"
              src="/public/case study8.png"
              alt="todolist"
            />
          </figure>
          <div className="card-body bg-zinc-800 rounded-b-xl">
            <h2 className="card-title">Use Case Study - Amartha Gold Investmen</h2>
            <p className="text-zinc-400">Project Challange Brief Team di Skilvul Program Studi Independen</p>
            <p className="text-zinc-300">As UI/UX Designer</p>
            <div className="card-actions justify-end mt-2">
              <img
                className="w-8 brightness-50 hover:brightness-100
                "
                src="/public/figma.svg"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="card bg-base-100 w-full shadow-xl mb-4">
          <figure>
            <img
              className="brightness-50 hover:brightness-100"
              src="/public/SkyEdu.png"
              alt="todolist"
            />
          </figure>
          <div className="card-body bg-zinc-800 rounded-b-xl">
            <h2 className="card-title">Use Case Study - SkyEdu</h2>
            <p className="text-zinc-400">Project Challange Brief Team di Skilvul Program Studi Independen</p>
            <p className="text-zinc-300">As UI/UX Designer</p>
            <div className="card-actions justify-end mt-2">
              <img
                className="w-8 brightness-50 hover:brightness-100
                "
                src="/public/figma.svg"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="card bg-base-100 w-full shadow-xl mb-4">
          <figure>
            <img
              className="brightness-50 hover:brightness-100"
              src="/public/mockup laundry app 1.png"
              alt="todolist"
            />
          </figure>
          <div className="card-body bg-zinc-800 rounded-b-xl">
            <h2 className="card-title">Use Case Study Laundry App</h2>
            <p className="text-zinc-400">Human-computer interaction course assignments</p>
            <p className="text-zinc-300">As UI/UX Designer</p>
            <div className="card-actions justify-end mt-2">
              <img
                className="w-8 brightness-50 hover:brightness-100
                "
                src="/public/figma.svg"
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
