const CardLayout = () => {
  return (
    <div className="w-full h-full">
      <div className="bg-black text-white flex flex-col lg:flex-row items-center justify-start m-4">
        <div className="rounded-lg shadow-lg py-4 px-4 w-full text-center text-white border sm:max-w-sm">
          <div className="flex flex-row sm:flex-row items-center sm:justify-between sm:gap-4 gap-20 mb-2 sm:mb-">
            <h1 className="text-2xl font-base mt-2 sm:mb-0 md:text-2xl lg:text-3xl">Meliana</h1>
            <p className="text-sm md:text-sm sm:mt-2">Front End Developer</p>
          </div>
          <img
            className="rounded-lg mx-auto w-full sm:w-full h-auto"
            src="/profile.jpg"
            alt="Meliana"
          />
          <div className="m-2">
            <p className="text-xs md:text-sm ">melianaa1020@gmail.com</p>
            <p className="text-xs md:text-sm">Purbalingga, Jawa Tengah</p>
          </div>
          <button className="bg-gray-300 text-black text-xs md:text-sm font-medium py-2 px-4 rounded-lg w-full">
            Download CV
          </button>
          <div className="flex justify-center gap-8 mt-4">
            <img 
              className="w-6 h-8 md:w-8 md:h-8 brightness-100 hover:brightness-50" 
              src="/linkedin.svg" 
              alt="LinkedIn"
              onClick={() =>
                (window.location.href = "https://www.linkedin.com/in/meliana-07a72823a/")
              }
               />
            <img 
              className="w-8 h-8 md:w-8 md:h-8 brightness-100 hover:brightness-50" 
              src="/github.svg" 
              alt="GitHub"
              onClick={() =>
                (window.location.href = "https://github.com/Meliana1020")
              } 
              />
            <img 
              className="w-6 h-8 md:w-8 md:h-8 brightness-100 hover:brightness-50" 
              src="/medium.svg" 
              alt="Medium" 
              onClick={() =>
                (window.location.href = "https://medium.com/@m7607038")
              }
              />
            <img 
              className="w-6 h-8 md:w-8 md:h-8 brightness-100 hover:brightness-50" 
              src="/wa.svg" 
              alt="whatsapp" 
              onClick={() =>
                (window.location.href = "https://wa.me/6285718354228")
              }
              />
          </div>
          <div className="flex justify-center mt-4">
            <p className="text-xs md:text-sm">© 2024 Meliana. All Rights Reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardLayout;
