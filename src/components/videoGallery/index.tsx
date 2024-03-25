import Video from "../video";

const VideoGallery = () => {

  return (
    <section
      className="flex flex-col md:flex-row relative top-[100px] gap-4 xl:gap-10 bg-[#dbf1f6] px-5 md:px-10 lg:px-40 2xl:px-80 pb-20 md:pb-28 rounded-t-[50px]"
    >
      <div id="videoGallery" className="absolute top-[-100px]"></div>
      <Video />
    </section>
  );
};

export default VideoGallery;
