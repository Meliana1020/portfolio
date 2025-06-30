const ProfileContent = () => {
  return (
    <div className="mt-96 sm:mt-22 text-white" id="profile">
      <div className="flex flex-row border  p-2 rounded-lg w-fit mb-12">
        <img src="/clarity_tools.svg" alt="" className="w-4" />
        <p className="pl-2 text-xs">ABOUTE ME</p>
      </div>

      <div className="relative flex items-center">
        <div className="text-xl font-semibold leading-relaxed">
          <div className="flex flex-row">
            <div className="bg-orange-500 rounded-xl w-1 h-3 mr-2"></div>
            <h1 className="text-lg font-medium mr-2">Name : </h1>
            <p className="text-lg font-normal ">Meliana</p>
          </div>
          <div className="flex flex-row">
            <div className="bg-orange-500 rounded-xl w-1 h-3 mr-2"></div>
            <h1 className="text-lg font-medium mr-2">Age :</h1>
            <p className="text-lg font-normal ">24 years old</p>
          </div>
          <div className="flex flex-row">
            <div className="bg-orange-500 rounded-xl w-1 h-3 mr-2"></div>
            <h1 className="text-lg font-medium mr-2">Email: </h1>
            <p className="text-lg font-normal ">meliana1020@gmail.com</p>
          </div>
          <div className="flex flex-row">
            <div className="bg-orange-500 rounded-xl w-1 h-3 mr-2"></div>
            <h1 className="text-lg font-medium mr-2">Adress:</h1>
            <p className="text-lg font-normal ">Purbalingga, Jawa Tengah</p>
          </div>
          <div className="flex flex-row">
            <div className="bg-orange-500 rounded-xl w-1 h-3 mr-2"></div>
            <h1 className="text-lg font-medium mr-2">Phone : </h1>
            <p className="text-lg font-normal ">+6285718354228</p>
          </div>
        </div>
      </div>

      <div className="text-lg mb-4 text-neutral-500 mt-6 leading-relaxed  sm:mr-20">
        <p>
          I am a Bachelor of Information Technology graduate and have completed
          an intensive Fullstack Development bootcamp at Harisenin.com. I have a
          4- month internship experience as a Frontend Developer working on
          landing page, registration, and login features using the Next JS,
          Tailwind CSS, Shadcn UI technology stack. In addition to focusing on
          the frontend, I am currently also exploring and learning to build
          websites and backends with several tech stacks that I use, namely Nest
          JS, Supabase and Firebase, MySQL and PostgreSQL databases. Then during
          the bootcamp, I worked on several projects, including a learning video
          website using JavaScript, React, and Tailwind CSS, as well as a To-Do
          List application using HTML, CSS, JavaScript, and Fetching API to
          retrieve data and display the results. Focusing on Frontend
          Development, I have mastered HTML, CSS, JavaScript, React, Next JS,
          Supabase, Firebase, MySQL, PostgreSQL, Git, Tailwind CSS, Shadcn UI,
          GitHub Collaboration, GitHub, and modern techniques in data retrieval.
          With the spirit to continue learning and developing, I hope to have a
          positive influence on the company where I work.
        </p>
        <br />
        <p>
          Previously, I had experience as a teacher, which strengthened my
          communication skills, public speaking, and intra- and interpersonal
          understanding—important skills in collaborating and understanding user
          needs. During the bootcamp, I became more honed in problem solving and
          got used to doing tasks according to the targets set. With this
          combination of technical expertise and soft skills, I create solutions
          to deliver digital solutions that provide real impact.
        </p>
      </div>

      <footer className="mt-10"></footer>
    </div>
  );
};

export default ProfileContent;
