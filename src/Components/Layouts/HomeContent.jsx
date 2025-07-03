const HomeContent = () => {
    return(
        <div className="lg:mt-10 text-white justify-center" id="home">
        <div className="flex flex-row border p-2 rounded-lg w-fit justify-start mb-10">
          <img src="/home.svg" alt="" className="w-4" />
          <p className="pl-2 text-xs">INTRODUCE</p>
        </div>
            <h1 className="text-5xl sm:text-9xl lg:text-8xl md:text-7xl font-base mb-2">Say Hi From Meliana,</h1>
            <h1 className="text-2xl sm:text-6xl lg:text-6xl md:text-4xl font-base mb-2">Frontend Engineer</h1>
            <p className="text-lg mb-4 text-neutral-500 mt-2 sm:mr-20">
            I believe that beautiful interfaces should be supported by readable, 
            maintainable code that follows best practices for optimal performance. 
            
            But more than that, I believe that problem solving is the soul of good development - 
            because behind a beautiful UI, there should be the ability to think systematically 
            to solve complex problems and build a robust and scalable code architecture.{" "}
          
        </p>
      </div>
    )
}

export default  HomeContent;