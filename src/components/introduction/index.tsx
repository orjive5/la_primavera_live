import Video from "../video";

const Introduction = () => {

  return (
    <section
      className="flex flex-col justify-center items-center pt-40 md:pb-20 px-5 md:px-10 lg:px-40 2xl:px-80"
    >
      <div id="introduction" className="absolute top-[-100px]"></div>
      <div className="contact-bg py-2 px-4 rounded-3xl">
        {/* <div className="contact-bg bg-[#FFFAE7] py-2 px-4 rounded-3xl"> */}
        <h2 className="opacity-80 font-semibold tracking-widest text-xs sm:text-base">
          OSNOVAN 2023
        </h2>
      </div>
      <div className="mt-5 mb-10 leading-none tracking-wide text-center">
        <div>
          <p className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-semibold">Gudački Kvartet</p>
          <h1 className="music-artists music-gradient inline-block text-4xl sm:text-6xl md:text-6xl lg:text-7xl font-bold">
            LA PRIMAVERA
          </h1>
        </div>
      </div>
      <Video />
    </section>
  );
};

export default Introduction;