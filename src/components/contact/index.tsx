import { Mail, Smartphone, MapPin, Instagram } from "lucide-react";

const Contact = () => {
  return (
    <section
      className="flex flex-col md:flex-row relative gap-4 xl:gap-10 bg-[#CBEBF2] px-5 md:px-10 lg:px-40 2xl:px-80 pt-5 md:pt-10 lg:pt-20 pb-20 md:pb-28 rounded-t-[50px]"
    >
      <div id="contact" className="absolute top-[-100px]"></div>
      <h2 className="text-2xl md:text-3xl text-center md:text-left md:min-w-[200px] lg:min-w-[300px] 2xl:min-w-[400px] font-bold tracking-wide">
        Kontakt
      </h2>
      <div className="flex flex-col gap-4 px-12">
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
            +381637056830
          </p>
        </div>
        <div className="flex gap-2 items-center">
          <MapPin className="w-6 h-6" />
          <p className="text-xs sm:text-sm md:text-xl font-semibold">
            Beograd, Srbija
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;