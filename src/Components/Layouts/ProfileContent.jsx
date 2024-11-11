
const ProfileContent = () => {
  return (
    <div className="mt-96 sm:mt-22 text-white m-6" id="profile">
      <div className="flex flex-row border  p-2 rounded-lg w-fit mb-12">
        <img src="/clarity_tools.svg" alt="" className="w-4" />
        <p className="pl-2 text-xs">ABOUTE ME</p>
      </div>

        <div className="relative flex items-center">
          <div className="text-xl font-semibold">
            <div className="flex flex-row">
              <div className="bg-zinc-200 rounded-xl w-2 h-2 m-2"></div>
              <p className="text-medium font-normal">Name : Meliana</p>
            </div>
            <div className="flex flex-row">
              <div className="bg-zinc-200 rounded-xl w-2 h-2 m-2"></div>
              <p className="text-medium font-normal">Age : 24 years old</p>
            </div>
            <div className="flex flex-row">
              <div className="bg-zinc-200 rounded-xl w-2 h-2 m-2"></div>
              <p className="text-medium font-normal">
                Email : melianaa1020@gmail.com
              </p>
            </div>
            
            <div>
            <div className="flex flex-row">
              <div className="bg-zinc-200 rounded-xl w-2 h-2 m-2"></div>
              <p className="text-medium font-normal">
                Adress : Puurbalingga, Jawa Tengah
              </p>
            </div>
            <div className="flex flex-row">
              <div className="bg-zinc-200 rounded-xl w-2 h-2 m-2"></div>
              <p className="text-medium font-normal">
                Phone : +62-857-1835-4228
              </p>
            </div>
            </div>
            
          </div>
        </div>

        <div className="text-lg mb-4 text-neutral-500 mt-6 leading-relaxed  sm:mr-20">
          <p>
            I am a Bachelor's degree graduate in Informatics Engineering with
            additional intensive training from the Fullstack Development
            bootcamp at Harisenin.com. Currently, I focus on frontend
            development with expertise in HTML, CSS, JavaScript, React, GIT, and
            Tailwind CSS.
          </p>
          <br />
          <p>
            Previously, I had experience as a teacher, which strengthened my
            communication skills, public speaking, and intra- and interpersonal
            understanding—important skills in collaborating and understanding
            user needs. During the bootcamp, I became more honed in problem
            solving and got used to doing tasks according to the targets set.
            With this combination of technical expertise and soft skills, I
            create solutions to deliver digital solutions that provide real
            impact.
          </p>
        </div>

        <footer className="mt-10"></footer>
    </div>
  );
};

export default ProfileContent;
