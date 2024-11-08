const HomeContent = () => {
    return(
        <div className="m-6 mt-20 text-white">
        <div className="flex flex-row border  p-2 rounded-lg w-fit justify-start mb-10">
          <img src="./public/home.svg" alt="" className="w-4" />
          <p className="pl-2 text-xs">INTRODUCE</p>
        </div>
            <h1 className="text-2xl font-bold mb-2">Say Hi From Meliana,</h1>
            <h1 className="text-xl font-bold mb-2">Front End Developer</h1>
            <p className="text-lg mb-4 text-zinc-400 mt-2">
            I enjoy designing and transforming designs into efficient code. My
            enthusiasm for creating
            <p>
            beautiful and functional websites is always my motivation, and I
            love what I do.{" "}
          </p>
        </p>
        <footer className="mt-10"></footer>
      </div>
    )
}

export default  HomeContent;