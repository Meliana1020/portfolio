const HomeContent = () => {
    return(
        <div className="m-6 mt-20 text-white" id="home">
        <div className="flex flex-row border  p-2 rounded-lg w-fit justify-start mb-10">
          <img src="/home.svg" alt="" className="w-4" />
          <p className="pl-2 text-xs">INTRODUCE</p>
        </div>
            <h1 className="text-2xl sm:text-9xl font-base mb-2">Say Hi From Meliana,</h1>
            <h1 className="text-xl sm:text-6xl font-base mb-2">Front End Developer</h1>
            <p className="text-lg mb-4 text-neutral-500 mt-2 sm:mr-20">
            I enjoy designing and transforming designs into efficient code. My
            enthusiasm for creating
            
            beautiful and functional websites is always my motivation, and I
            love what I do.{" "}
          
        </p>
        <footer className="mt-10"></footer>
      </div>
    )
}

export default  HomeContent;