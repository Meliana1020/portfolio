const ProfileContent = () => {
  return (
    <div className="mt-96 text-white m-6">
      <div className="flex flex-row border  p-2 rounded-lg w-fit mb-12">
        <img src="./public/clarity_tools.svg" alt="" className="w-4" />
        <p className="pl-2 text-xs">ABOUTE ME</p>
      </div>

      <div class="relative flex items-center">
        <div class="text-xl font-semibold">
          <h2>Name  : Meliana</h2>
          <p >Age    : 24</p>
          <p>Phone : +62-857-1835-4228</p>
        </div>
      </div>
      <div className="text-lg mb-4 text-zinc-400 mt-6 leading-relaxed ">
      <p>
      Saya adalah lulusan S1 Teknik Informatika dengan tambahan 
      pelatihan intensif dari bootcamp Fullstack Development 
      di Harisenin.com. Saat ini, saya berfokus pada pengembangan 
      frontend dengan keahlian dalam HTML, CSS, JavaScript, React, GIT, dan Tailwind CSS.
      </p><br />
      <p>
      Sebelumnya, saya memiliki pengalaman sebagai guru, yang
       memperkuat kemampuan komunikasi, public speaking, serta
        pemahaman intra dan interpersonal—keterampilan penting 
        dalam berkolaborasi dan memahami kebutuhan pengguna. 
        Selama bootcamp, saya semakin terasah dalam problem 
        solving dan terbiasa mengerjakan tugas sesuai target 
        yang ditetapkan. Dengan kombinasi keahlian teknis dan 
        soft skills ini, saya berdedikasi untuk menghadirkan solusi digital yang memberikan dampak nyata.
      </p>
      </div>
      
      <footer className="mt-10"></footer>
    </div>
  );
};

export default ProfileContent;
