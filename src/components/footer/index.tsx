import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <section id="footer" className="z-10 flex items-center relative justify-center bg-[#B4E5EF] top-[-50px] min-h-[300px] w-full rounded-t-[50px] px-5 md:px-10 lg:px-20 pt-5 md:pt-10 lg:pt-20 pb-20 md:pb-28">
      <div className="relative top-7 flex flex-col items-center gap-5 justify-center">
        <Link href='#home' className="flex items-center relative h-12">
          <Image
            src="/logo.png"
            width="0"
            height="0"
            sizes="100vw"
            className="w-auto h-full object-cover box-border overflow-hidden cursor-pointer hover:opacity-80"
            alt="MIR Production logo"
          />
        </Link>
        <h2 className="text-center text-xs sm:text-sm md:text-xl">
          &copy; 2024 La Primavera Quartet. Sva prava zadržana.
        </h2>
      </div>
      <div className="bg-[#B4E5EF] absolute bottom-[-56px] h-32 w-full z-0"></div>
    </section>
  );
};

export default Footer;
