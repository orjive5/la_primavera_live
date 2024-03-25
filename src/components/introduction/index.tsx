// import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import Image from "next/image";
import { AspectRatio } from "../ui/aspect-ratio";
import Video from "../video";

const Introduction = () => {

  return (
    <section
      className="flex flex-col justify-center items-center pt-40 md:pb-20 px-5 md:px-10 lg:px-40 2xl:px-80"
    >
      <div id="introduction" className="absolute top-[-100px]"></div>
      <div className="bg-[#D4EEF4] py-2 px-4 rounded-3xl">
        <h2 className="opacity-80 font-semibold tracking-widest text-xs sm:text-base">
          OSNOVAN 2023
        </h2>
      </div>
      <div className="mt-5 mb-10 leading-none tracking-wide text-center">
        <div>
          <p className="text-md sm:text-2xl md:text-3xl lg:text-4xl font-semibold">Gudački Kvartet</p>
          <h1 className="font-niconne inline-block text-4xl sm:text-6xl md:text-6xl lg:text-8xl font-medium">
            La Primavera
          </h1>
        </div>
      </div>
      <section className="w-full xl:w-2/3">
        <AspectRatio
          className="overflow-hidden rounded-lg"
          ratio={16 / 9}
        >
          <Image
            src='/photo1.jpg'
            alt={`La Primavera photo`}
            priority={true}
            fill
            className="rounded-lg object-cover object-center"
          />
        </AspectRatio>
      </section>
    </section>
  );
};

export default Introduction;