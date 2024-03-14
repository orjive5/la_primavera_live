import { Mail, Smartphone, MapPin, Instagram } from "lucide-react";

const Contact = () => {
  return (
    <section
      className="flex flex-col md:flex-row relative gap-10 bg-[#FFF7DC] px-5 md:px-10 lg:px-40 2xl:px-80 pt-5 md:pt-10 lg:pt-20 pb-20 md:pb-28 rounded-t-[50px]"
    >
      <div id="contact" className="absolute top-[-100px]"></div>
      <h2 className="text-2xl md:text-3xl text-center md:text-left md:min-w-[200px] lg:min-w-[300px] 2xl:min-w-[400px] font-bold tracking-wide">
        Kontakt
      </h2>
      <div className="flex flex-col gap-5">
        <div className="flex gap-2 items-center">
          <Mail className="w-6 h-6" />
          <p className="text-xs sm:text-sm md:text-xl font-semibold">
            laprimaveraquartet@gmail.com
          </p>
        </div>
        <div className="flex gap-2 items-center">
          <Instagram className="w-6 h-6" />
          <p className="text-xs sm:text-sm md:text-xl font-semibold">
            @la_primaveraquartet
          </p>
        </div>
        <div className="flex gap-2 items-center">
          <Smartphone className="w-6 h-6" />
          <p className="text-xs sm:text-sm md:text-xl font-semibold">
            +381695055015
          </p>
        </div>
        <div className="flex gap-2 items-center">
          <MapPin className="w-6 h-6" />
          <p className="text-xs sm:text-sm md:text-xl font-semibold">
            Beograd, Srbija
          </p>
        </div>
      </div>
      {/* <article className="text-base md:text-2xl text-center md:text-left leading-normal flex flex-col gap-10">
        <p>
          Gudački kvartet, sa strastvenom predanošću prema muzici, spaja četiri jedinstvena talenta u harmoničnu celinu, pružajući slušaocima nezaboravno iskustvo koje prelazi granice klasične muzike.
        </p>
        <p>
          Kroz maštovite interpretacije i izvedbe, naš kvartet teži da osveži klasični repertoar i istraži novu muzičku literaturu, približavajući umetnost široj publici. Osnovan s idejom da muzika spaja ljude, mi smo posvećeni deljenju naše strasti i ljubavi prema muzici kroz koncerte, obrazovne programe i zajedničke projekte sa umetnicima iz različitih oblasti.
        </p>
      </article> */}
      {/* <div className="flex flex-col items-center gap-5 w-full md:w-2/3 contact-bg py-5 sm:py-20 rounded-3xl md:rounded-xl">
        <h2 className="text-center text-xl md:text-3xl font-bold">
          Kontakt
        </h2>
        <div className="flex flex-col gap-5">
          <div className="flex gap-2 items-center">
            <Mail className="w-6 h-6" />
            <p className="text-xs sm:text-sm md:text-xl font-semibold">
              laprimaveraquartet@gmail.com
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <Smartphone className="w-6 h-6" />
            <p className="text-xs sm:text-sm md:text-xl font-semibold">
              +381695055015
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <MapPin className="w-6 h-6" />
            <p className="text-xs sm:text-sm md:text-xl font-semibold">
              Beograd, Srbija
            </p>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default Contact;