import { ImageCarousel } from "../imageCarousel";


const Gallery = () => {

  return (
    <section
      className="flex flex-col md:flex-row gap-4 md:gap-10 relative top-[50px] bg-[#D4EEF4] rounded-t-[50px] px-5 md:px-10 lg:px-40 2xl:px-80 pt-5 md:pt-10 lg:pt-20 pb-20 md:pb-28"
    >
      <div id="gallery" className="absolute top-[-100px]"></div>
      <h1 className="text-2xl md:text-3xl text-center md:text-left md:min-w-[200px] lg:min-w-[300px] 2xl:min-w-[400px] font-bold tracking-wide">
        Galerija
      </h1>
      <div className="w-full px-12 xl:px-0">
        <ImageCarousel />
      </div>

    </section>
  );
};

export default Gallery;
