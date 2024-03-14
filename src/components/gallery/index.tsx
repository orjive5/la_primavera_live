import { ImageCarousel } from "../imageCarousel";


const Gallery = () => {

  return (
    <section
      className="flex flex-col md:flex-row md:gap-10 relative top-[50px] bg-[#FFFAE7] rounded-t-[50px] px-5 md:px-10 lg:px-40 2xl:px-80 pt-5 md:pt-10 lg:pt-20 pb-20 md:pb-28"
    >
      <div id="gallery" className="absolute top-[-100px]"></div>
      <h1 className="text-2xl md:text-3xl text-center md:text-left md:min-w-[200px] lg:min-w-[300px] 2xl:min-w-[400px] font-bold tracking-wide pb-10">
        Galerija
      </h1>
      <ImageCarousel />
    </section>
  );
};

export default Gallery;
